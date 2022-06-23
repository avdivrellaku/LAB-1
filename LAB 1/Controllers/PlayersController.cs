using Dapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace LAB_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlayersController : ControllerBase
    {
      
        private readonly LABCOURSE1Context context;
        private readonly IConfiguration configuration;

        public PlayersController(LABCOURSE1Context context, IConfiguration config)
        {
            this.context = context;
            this.configuration = config;
        }
          [HttpGet]

          public async Task<ActionResult<List<Player>>> Get()
        {
            using var connection = new SqlConnection(this.configuration.GetConnectionString("LabCourseConn"));

            var players = await connection.QueryAsync<Player>("Select * from Players");

            return Ok(players);
        }

        [HttpGet]
        [Route("Guards")]
        public async Task<ActionResult<List<Player>>> GetGuards()
        {
            using var connection = new SqlConnection(this.configuration.GetConnectionString("LabCourseConn"));

            var players = await connection.QueryAsync<Player>("Select * from Players where position = 'PG' or postion = 'SG' ");

            return Ok(players);
        }
        [HttpGet]
        [Route("Forwards")]
        public async Task<ActionResult<List<Player>>> GetFwd()
        {
            using var connection = new SqlConnection(this.configuration.GetConnectionString("LabCourseConn"));

            var players = await connection.QueryAsync<Player>("Select * from Players where position = 'SF' or postion = 'PF' ");

            return Ok(players);
        }

        [HttpGet]
        [Route("Centers")]
        public async Task<ActionResult<List<Player>>> GetCenters()
        {
            using var connection = new SqlConnection(this.configuration.GetConnectionString("LabCourseConn"));

            var players = await connection.QueryAsync<Player>("Select * from Players where position = 'C' ");

            return Ok(players);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<Player>>> Get(String id)
        {
             var player = await this.context.Players.FindAsync(id);
                if (player == null)
            {
                return BadRequest("Player not found.");
            }
            return Ok(player);

        }
        [HttpPost]
        public async Task<ActionResult<List<Player>>> AddPlayers(Player player)
        {
           this.context.Players.Add(player);
            await this.context.SaveChangesAsync();
            return Ok(await this.context.Players.ToListAsync());

        }
        [HttpPut]
        public async Task<ActionResult<List<Player>>> UpdatePlayers(Player playeru)
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
        public async Task<ActionResult<List<Player>>> DeletePlayer(String id)
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
