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
    }


}
