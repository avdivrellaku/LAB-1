using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LAB_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlayersController : ControllerBase
    {
      
        private readonly DataContext context;

        public PlayersController(DataContext context)
        {
            this.context = context;
        }
          [HttpGet]
        public async Task<ActionResult<List<Models.Players>>> Get()
        {
          
            return Ok(await this.context.Players.ToListAsync());
   
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Models.Players>>> Get(String id)
        {
             var player = await this.context.Players.FindAsync(id);
                if (player == null)
            {
                return BadRequest("Player not found.");
            }
            return Ok(player);

        }
        [HttpPost]
        public async Task<ActionResult<List<Models.Players>>> AddPlayers(Models.Players player)
        {
           this.context.Players.Add(player);
            await this.context.SaveChangesAsync();
            return Ok(await this.context.Players.ToListAsync());

        }
        [HttpPut]
        public async Task<ActionResult<List<Models.Players>>> UpdatePlayers(Models.Players playeru)
        {

            var dbPlayer = await this.context.Players.FindAsync(playeru.Id);
            if (dbPlayer == null)
            {
                return BadRequest("Player not found.");
            }
            dbPlayer.FirstName = playeru.FirstName;
            dbPlayer.LastName = playeru.LastName;
            dbPlayer.Age = playeru.Age;
            dbPlayer.Team = playeru.Team;
            dbPlayer.Position = playeru.Position;

            await this.context.SaveChangesAsync();

            return Ok(await this.context.SaveChangesAsync());

        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Models.Players>>> DeletePlayer(String id)
        {
            var player = await this.context.Players.FindAsync(id);
            if (player == null)
            {
                return BadRequest("Player not found.");
            }
        

             this.context.Players.Remove(player);
            await this.context.SaveChangesAsync();
            return Ok(await this.context.SaveChangesAsync());

        }
    }
}
