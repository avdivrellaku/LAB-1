using Dapper;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace LAB_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsController : Controller
    {
        private readonly LABCOURSE1Context context;
        private readonly IConfiguration configuration;

        public NewsController(LABCOURSE1Context context, IConfiguration config)
        {
            this.context = context;
            this.configuration = config;
        }

        [HttpGet]

        public async Task<ActionResult<List<News>>> Get()
        {
            using var connection = new SqlConnection(this.configuration.GetConnectionString("LabCourseConn"));

            var news = await connection.QueryAsync<News>("Select * from News order by DatePublished desc");

            return Ok(news);

        }

        [HttpPost]
        public async Task<ActionResult<List<News>>> AddGame(News article)
        {
            this.context.News.Add(article);
            await this.context.SaveChangesAsync();
            return Ok(await this.context.News.ToListAsync());

        }

        [HttpPut]
        public async Task<ActionResult<List<News>>> UpdatePlayers(News newsu)
        {

            var dbNews = await this.context.News.FindAsync(newsu.Id);
            if (dbNews == null)
            {
                return BadRequest("News not found.");
            }
            dbNews.Title = newsu.Title;
            dbNews.SmallDesc = newsu.SmallDesc;
            dbNews.FullArticle = newsu.FullArticle;
            dbNews.DatePublished = newsu.DatePublished;
            dbNews.ImageName = newsu.ImageName;

            await this.context.SaveChangesAsync();

            return Ok(await this.context.SaveChangesAsync());

        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<News>>> DeletePlayer(int id)
        {
            var neww = await this.context.News.FindAsync(id);
            if (neww == null)
            {
                return BadRequest("News not found.");
            }


            this.context.News.Remove(neww);
            await this.context.SaveChangesAsync();
            return Ok(await this.context.SaveChangesAsync());

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<News>>> Get(int id)
        {
            var neww = await this.context.News.FindAsync(id);
            if (neww == null)
            {
                return BadRequest("News not found.");
            }
            return Ok(neww);

        }
    }
}