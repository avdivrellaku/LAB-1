using Microsoft.AspNetCore.Mvc;

namespace LAB_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArenasController : Controller
    {
        private readonly Models.LABCOURSE1Context context;
        public ArenasController(Models.LABCOURSE1Context context)
        {
            this.context = context;
        }


        [HttpGet]

        public async Task<ActionResult<List<Models.Arena>>> Get()
        {

            return Ok(await this.context.Arenas.ToListAsync());

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<Models.Arena>>> Get(int id)
        {
            var arena = await this.context.Arenas.FindAsync(id);
            if (arena == null)
            {
                return BadRequest("Arena not found.");
            }
            return Ok(arena);

        }
        [HttpPost]
        public async Task<ActionResult<List<Models.Arena>>> AddArenas(Models.Arena arena)
        {
            this.context.Arenas.Add(arena);
            await this.context.SaveChangesAsync();
            return Ok(await this.context.Arenas.ToListAsync());

        }
        [HttpPut]
        public async Task<ActionResult<List<Models.Arena>>> UpdateArenas(Models.Arena arenaa)
        {

            var dbArena = await this.context.Arenas.FindAsync(arenaa.Id);
            if (dbArena == null)
            {
                return BadRequest("Arena not found.");
            }
            dbArena.Id = arenaa.Id;
            dbArena.Name = arenaa.Name;
            dbArena.Location = arenaa.Location;
            dbArena.Team = arenaa.Team;
            dbArena.Capacity = arenaa.Capacity;
            dbArena.ImageName = arenaa.ImageName;

            await this.context.SaveChangesAsync();

            return Ok(await this.context.SaveChangesAsync());

        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Models.Arena>>> DeleteArena(int id)
        {
            var arena = await this.context.Arenas.FindAsync(id);
            if (arena == null)
            {
                return BadRequest("Arena not found.");
            }


            this.context.Arenas.Remove(arena);
            await this.context.SaveChangesAsync();
            return Ok(await this.context.SaveChangesAsync());

        }
    }


}
