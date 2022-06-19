using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace LAB_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly LABCOURSE1Context context;
        private readonly IConfiguration configuration;

        public UserController(LABCOURSE1Context context, IConfiguration configuration)
        {
            this.context = context;
            this.configuration = configuration;

        }
        [HttpGet]
        public async Task<ActionResult<List<User>>> Get()
        {

            return Ok(await this.context.Users.ToListAsync());

        }
        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> userLogin([FromBody] Login login)
        {

                var sha = SHA256.Create();
                var asByteArray = Encoding.Default.GetBytes(login.Password);
                var hashedPassword = sha.ComputeHash(asByteArray);
                login.Password = Convert.ToBase64String(hashedPassword);

        
            var dbuser = this.context.Users.Where(u => u.Username == login.Username && u.Password == login.Password).FirstOrDefault();

            if (dbuser == null){

                return BadRequest();
            }

            string token = CreateToken(dbuser);


            return Ok(token);

        }

        private string CreateToken(User user)

        {
            List<Claim> claims = new List<Claim>
            {
                new Claim("First Name",user.FirstName),
                new Claim("Last Name",user.LastName),
                new Claim("Username",user.Username),
                new Claim("Role",user.Role)

            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(
                this.configuration.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature);
            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds);

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);
            return jwt;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<User>>> Get(int id)
        {
            var user = await this.context.Users.FindAsync(id);
            if (user == null)
            {
                return BadRequest("User not found.");
            }
            return Ok(user);

        }
        [HttpPost]
        public async Task<ActionResult<List<User>>>AddUsers(User user)
        {

            var dbUser = this.context.Users.Where(u => u.Email == user.Email).FirstOrDefault();

            if (dbUser != null)
            {
                return BadRequest("User ekziston already");
            }

            var sha = SHA256.Create();
            var asByteArray = Encoding.Default.GetBytes(user.Password);
            var hashedPassword = sha.ComputeHash(asByteArray);
            user.Password = Convert.ToBase64String(hashedPassword);

            this.context.Users.Add(user);
            await this.context.SaveChangesAsync();
            return Ok(await this.context.Users.ToListAsync());

        }
        [HttpPut]
        public async Task<ActionResult<List<User>>> UpdateUsers(User userup)
        {

            var dbUser = await this.context.Users.FindAsync(userup.Id);
            if (dbUser == null)
            {
                return BadRequest("Player not found.");
            }
            dbUser.FirstName = userup.FirstName;
            dbUser.LastName = userup.LastName;
            dbUser.Username = userup.Username;
            dbUser.Email = userup.Email;
            dbUser.Password = userup.Password;
            dbUser.Role = userup.Role;

            await this.context.SaveChangesAsync();

            return Ok(await this.context.SaveChangesAsync());

        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Player>>> DeleteUser(int id)
        {
            var user = await this.context.Users.FindAsync(id);
            if (user == null)
            {
                return BadRequest("Player not found.");
            }


            this.context.Users.Remove(user);
            await this.context.SaveChangesAsync();
            return Ok(await this.context.SaveChangesAsync());

        }
    }
}


