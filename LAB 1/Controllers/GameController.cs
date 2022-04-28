using Microsoft.AspNetCore.Mvc;

namespace LAB_1.Controllers
{
    public class GameController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
