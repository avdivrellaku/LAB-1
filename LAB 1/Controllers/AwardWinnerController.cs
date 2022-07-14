using Dapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace LAB_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AwardWinnerController : ControllerBase
    {

        private readonly LABCOURSE1Context context;
        private readonly IConfiguration configuration;

        public AwardWinnerController(LABCOURSE1Context context, IConfiguration config)
        {
            this.context = context;
            this.configuration = config;
        }
        [HttpGet]

        public async Task<ActionResult<List<AwardWinner>>> Get()
        {
            using var connection = new SqlConnection(this.configuration.GetConnectionString("LabCourseConn"));

            var players = await connection.QueryAsync<AwardWinner>("Select * from AwardWinners");

            return Ok(players);
        }

        [HttpGet]
        [Route("MVP")]
        public async Task<ActionResult<List<AwardWinner>>> GetMVPs()
        {
            using var connection = new SqlConnection(this.configuration.GetConnectionString("LabCourseConn"));

            var players = await connection.QueryAsync<AwardWinner>("Select * from AwardWinners where award = 'MVP' order by yearWon desc ");

            return Ok(players);
        }
        [HttpGet]
        [Route("DPOY")]
        public async Task<ActionResult<List<AwardWinner>>> GetDPOYs()
        {
            using var connection = new SqlConnection(this.configuration.GetConnectionString("LabCourseConn"));

            var players = await connection.QueryAsync<AwardWinner>("Select * from AwardWinners where award = 'DPOY' order by yearWon desc ");

            return Ok(players);
        }

        [HttpGet]
        [Route("MIP")]
        public async Task<ActionResult<List<AwardWinner>>> GetMIPs()
        {
            using var connection = new SqlConnection(this.configuration.GetConnectionString("LabCourseConn"));

            var players = await connection.QueryAsync<AwardWinner>("Select * from AwardWinners where award = 'MIP' order by yearWon desc ");

            return Ok(players);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<AwardWinner>>> Get(String id)
        {
            var player = await this.context.AwardWinners.FindAsync(id);
            if (player == null)
            {
                return BadRequest("Player not found.");
            }
            return Ok(player);

        }
        [HttpPost]
        public async Task<ActionResult<List<AwardWinner>>> AddPlayers(AwardWinner player)
        {
            this.context.AwardWinners.Add(player);
            await this.context.SaveChangesAsync();
            return Ok(await this.context.AwardWinners.ToListAsync());

        }
        [HttpPut]
        public async Task<ActionResult<List<AwardWinner>>> UpdatePlayers(AwardWinner playeru)
        {

            var dbPlayer = await this.context.AwardWinners.FindAsync(playeru.Id);
            if (dbPlayer == null)
            {
                return BadRequest("Player not found.");
            }
            dbPlayer.Name = playeru.Name;
            dbPlayer.YearWon = playeru.YearWon;
            dbPlayer.Award = playeru.Award;
   

            await this.context.SaveChangesAsync();

            return Ok(await this.context.SaveChangesAsync());

        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<AwardWinner>>> DeletePlayer(String id)
        {
            var player = await this.context.AwardWinners.FindAsync(id);
            if (player == null)
            {
                return BadRequest("Player not found.");
            }


            this.context.AwardWinners.Remove(player);
            await this.context.SaveChangesAsync();
            return Ok(await this.context.SaveChangesAsync());

        }
    }
}
