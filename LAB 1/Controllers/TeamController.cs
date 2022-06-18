﻿using Microsoft.AspNetCore.Mvc;

namespace LAB_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamController : Controller
    {
        private readonly LABCOURSE1Context context;

        public TeamController(LABCOURSE1Context context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Team>>> Get()
        {

            return Ok(await this.context.Teams.ToListAsync());



        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<Team>>> Get(String id)
        {
            var team = await this.context.Teams.FindAsync(id);
            if (team == null)
            {
                return BadRequest("Team not found.");
            }
            return Ok(team);

        }

        [HttpPost]
        public async Task<ActionResult<List<Team>>> AddTeams(Team team)
        {
            this.context.Teams.Add(team);
            await this.context.SaveChangesAsync();
            return Ok(await this.context.Teams.ToListAsync());

        }

        [HttpPut]
        public async Task<ActionResult<List<Team>>> UpdateTeams(Team team)
        {

            var dbTeam = await this.context.Teams.FindAsync(team.Id);
            if (dbTeam == null)
            {
                return BadRequest("Team not found.");
            }
            dbTeam.Name = team.Name;
            dbTeam.Owner = team.Owner;
            dbTeam.Coach = team.Coach;
            dbTeam.Division = team.Division;
            dbTeam.Conference = team.Conference;

            await this.context.SaveChangesAsync();

            return Ok(await this.context.SaveChangesAsync());

        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Team>>> DeleteTeam(String id)
        {
            var team = await this.context.Teams.FindAsync(id);
            if (team == null)
            {
                return BadRequest("Team not found.");
            }


            this.context.Teams.Remove(team);
            await this.context.SaveChangesAsync();
            return Ok(await this.context.SaveChangesAsync());

        }
    }
}