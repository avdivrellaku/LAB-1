using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LAB_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {

        private readonly LABCOURSE1Context context;

        public GameController(LABCOURSE1Context context)
        {
            this.context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Game>>> Get()
        {

            return Ok(await this.context.Games.ToListAsync());

        }
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Game>>> Get(int id)
        {
            var Game = await this.context.Games.FindAsync(id);
            if (Game == null)
            {
                return BadRequest("Game not found.");
            }
            return Ok(Game);

        }
        [HttpPost]
        public async Task<ActionResult<List<Game>>> AddGame(Game Game)
        {
            this.context.Games.Add(Game);
            await this.context.SaveChangesAsync();
            return Ok(await this.context.Games.ToListAsync());

        }
        [HttpPut]
        public async Task<ActionResult<List<Game>>> UpdateGame(Game Gameupdated)
        {

            var dbGame = await this.context.Games.FindAsync(Gameupdated.Id);
            if (dbGame == null)
            {
                return BadRequest("Game not found.");
            }
            dbGame.Team1 = Gameupdated.Team1;
            dbGame.Team2 = Gameupdated.Team2;
            dbGame.Score = Gameupdated.Score;
            dbGame.Date = Gameupdated.Date;

            await this.context.SaveChangesAsync();

            return Ok(await this.context.SaveChangesAsync());

        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Game>>> DeleteGame(int id)
        {
            var Game = await this.context.Games.FindAsync(id);
            if (Game == null)
            {
                return BadRequest("Game not found.");
            }


            this.context.Games.Remove(Game);
            await this.context.SaveChangesAsync();
            return Ok(await this.context.SaveChangesAsync());

        }
    }
}
