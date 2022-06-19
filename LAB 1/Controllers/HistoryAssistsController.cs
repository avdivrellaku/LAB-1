using Microsoft.AspNetCore.Mvc;

namespace LAB_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HistoryAssistsController : Controller
    {
        private readonly LABCOURSE1Context context;

        public HistoryAssistsController(LABCOURSE1Context context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<HistoryAssist>>> Get()
        {

            return Ok(await this.context.HistoryAssists.ToListAsync());



        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<HistoryAssist>>> Get(String id)
        {
            var historyAssist = await this.context.HistoryAssists.FindAsync(id);
            if (historyAssist == null)
            {
                return BadRequest("History Assists not found.");
            }
            return Ok(historyAssist);

        }

        [HttpPost]
        public async Task<ActionResult<List<HistoryAssist>>> AddHistoryAssists(HistoryAssist historyassists)
        {
            this.context.HistoryAssists.Add(historyassists);
            await this.context.SaveChangesAsync();
            return Ok(await this.context.HistoryAssists.ToListAsync());

        }

        [HttpPut]
        public async Task<ActionResult<List<HistoryAssist>>> UpdateHistoryAssists(HistoryAssist historyassists)
        {

            var dbHistoryAssists = await this.context.HistoryAssists.FindAsync(historyassists.Id);
            if (dbHistoryAssists == null)
            {
                return BadRequest("History Assists not found.");
            }
            dbHistoryAssists.Nr = historyassists.Nr;
            dbHistoryAssists.FullName = historyassists.FullName;
            dbHistoryAssists.Points = historyassists.Points;
            dbHistoryAssists.GamesPlayed = historyassists.GamesPlayed;
            dbHistoryAssists.Turnovers = historyassists.Turnovers;
            dbHistoryAssists.ImageName = historyassists.ImageName;

            await this.context.SaveChangesAsync();

            return Ok(await this.context.SaveChangesAsync());

        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<HistoryAssist>>> DeleteHistoryAssist(String id)
        {
            var historyAssists = await this.context.HistoryAssists.FindAsync(id);
            if (historyAssists == null)
            {
                return BadRequest("History Assists not found.");
            }


            this.context.HistoryAssists.Remove(historyAssists);
            await this.context.SaveChangesAsync();
            return Ok(await this.context.SaveChangesAsync());

        }
    }
}
