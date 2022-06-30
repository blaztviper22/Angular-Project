using Microsoft.EntityFrameworkCore;
using School_Project.Models;

namespace School_Project.Context
{
    public class DBContext : DbContext
    {      
        public DBContext(DbContextOptions options)
            : base(options)
        {

        }

        public DbSet<Users> Users { get; set; }
    }
}
