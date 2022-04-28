﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LAB_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlayersController : ControllerBase
    {
      
        private readonly Models.LABCOURSE1Context context;

        public PlayersController(Models.LABCOURSE1Context context)
        {
            this.context = context;
        }
          [HttpGet]
        public async Task<ActionResult<List<Models.Player>>> Get()
        {
          
            return Ok(await this.context.Players.ToListAsync());
   
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Models.Player>>> Get(String id)
        {
             var player = await this.context.Players.FindAsync(id);
                if (player == null)
            {
                return BadRequest("Player not found.");
            }
            return Ok(player);

        }
        [HttpPost]
        public async Task<ActionResult<List<Models.Player>>> AddPlayers(Models.Player player)
        {
           this.context.Players.Add(player);
            await this.context.SaveChangesAsync();
            return Ok(await this.context.Players.ToListAsync());

        }
        [HttpPut]
        public async Task<ActionResult<List<Models.Player>>> UpdatePlayers(Models.Player playeru)
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
        public async Task<ActionResult<List<Models.Player>>> DeletePlayer(String id)
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