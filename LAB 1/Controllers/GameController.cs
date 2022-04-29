﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LAB_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {

        private readonly Models.LABCOURSE1Context context;

        public GameController(Models.LABCOURSE1Context context)
        {
            this.context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Models.Game>>> Get()
        {

            return Ok(await this.context.Games.ToListAsync());

        }
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Models.Game>>> Get(String id)
        {
            var Game = await this.context.Games.FindAsync(id);
            if (Game == null)
            {
                return BadRequest("Game not found.");
            }
            return Ok(Game);

        }
        [HttpPost]
        public async Task<ActionResult<List<Models.Game>>> AddGame(Models.Game Game)
        {
            this.context.Games.Add(Game);
            await this.context.SaveChangesAsync();
            return Ok(await this.context.Games.ToListAsync());

        }
        [HttpPut]
        public async Task<ActionResult<List<Models.Game>>> UpdateGame(Models.Game Gameupdated)
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
        public async Task<ActionResult<List<Models.Game>>> DeleteGame(String id)
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
