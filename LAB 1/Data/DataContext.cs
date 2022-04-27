using Microsoft.EntityFrameworkCore;

namespace LAB_1.Data
{
    public class DataContext : DbContext
    {

        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Models.Players> Players{get; set;}
    }
}
