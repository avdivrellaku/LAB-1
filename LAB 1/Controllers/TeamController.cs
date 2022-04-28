using Microsoft.AspNetCore.Mvc;

namespace LAB_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamController : Controller
    {
        private readonly Models.LABCOURSE1Context context;

        public TeamController(Models.LABCOURSE1Context context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Models.Team>>> Get()
        {

            return Ok(await this.context.Teams.ToListAsync());



        }
        [HttpPost]
        public async Task<ActionResult<List<Models.Team>>> AddTeams(Models.Team team)
        {
            this.context.Teams.Add(team);
            await this.context.SaveChangesAsync();
            return Ok(await this.context.Teams.ToListAsync());

        }
    }
}