using Microsoft.AspNetCore.Mvc;

namespace LAB_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HistoryPointsController : Controller
    {
        private readonly LABCOURSE1Context context;
        public HistoryPointsController(LABCOURSE1Context context)
        {
            this.context = context;
        }


        [HttpGet]
      
        public async Task<ActionResult<List<HistoryPoint>>> Get()
        {

            return Ok(await this.context.HistoryPoints.ToListAsync());

        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<HistoryPoint>>> DeletePlayer(String id)
        {
            var player = await this.context.HistoryPoints.FindAsync(id);
            if (player == null)
            {
                return BadRequest("Player not found.");
            }


            this.context.HistoryPoints.Remove(player);
            await this.context.SaveChangesAsync();
            return Ok(await this.context.SaveChangesAsync());

        }

        [HttpPost]
        public async Task<ActionResult<List<HistoryPoint>>> AddPlayers(HistoryPoint player)
        {
            this.context.HistoryPoints.Add(player);
            await this.context.SaveChangesAsync();
            return Ok(await this.context.HistoryPoints.ToListAsync());

        }
        [HttpPut]
        public async Task<ActionResult<List<HistoryPoint>>> UpdatePlayers(HistoryPoint playeru)
        {

            var dbPlayer = await this.context.HistoryPoints.FindAsync(playeru.Id);
            if (dbPlayer == null)
            {
                return BadRequest("Player not found.");
            }
            dbPlayer.Nr = playeru.Nr;
            dbPlayer.FullName = playeru.FullName;
            dbPlayer.Points = playeru.Points;
            dbPlayer.GamesPlayed = playeru.GamesPlayed;
            dbPlayer.ImageName = playeru.ImageName;

            await this.context.SaveChangesAsync();

            return Ok(await this.context.SaveChangesAsync());

        }
        [HttpGet("{id}")]
        public async Task<ActionResult<List<HistoryPoint>>> Get(String id)
        {
            var player = await this.context.HistoryPoints.FindAsync(id);
            if (player == null)
            {
                return BadRequest("Player not found.");
            }
            return Ok(player);

        }
    }


}
