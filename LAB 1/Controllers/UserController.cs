using Microsoft.AspNetCore.Mvc;

namespace LAB_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly Models.LABCOURSE1Context context;

        public UserController(Models.LABCOURSE1Context context)
        {
            this.context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Models.User>>> Get()
        {

            return Ok(await this.context.Users.ToListAsync());

        }
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Models.User>>> Get(int id)
        {
            var user = await this.context.Users.FindAsync(id);
            if (user == null)
            {
                return BadRequest("Player not found.");
            }
            return Ok(user);

        }
        [HttpPost]
        public async Task<ActionResult<List<Models.User>>>AddUsers(Models.User user)
        {
            this.context.Users.Add(user);
            await this.context.SaveChangesAsync();
            return Ok(await this.context.Users.ToListAsync());

        }
        [HttpPut]
        public async Task<ActionResult<List<Models.User>>> UpdateUsers(Models.User userup)
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
        public async Task<ActionResult<List<Models.Player>>> DeleteUser(int id)
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


