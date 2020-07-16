using Carcade.Mobile.Agent.Control.API.Models;
using Carcade.Mobile.Agent.Control.API.Models.DB;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System.Data.SqlClient;

namespace Carcade.Mobile.Agent.Control.API.Context
{
    public class Carcade_MobileSupplier_DB_Context : DbContext
    {
        private string connectionString;
        public Carcade_MobileSupplier_DB_Context(IOptions<AppSettings> settings)
        {
            var server = settings.Value.Context.Server;
            var database = settings.Value.Context.Database;
            connectionString = new SqlConnectionStringBuilder()
            {
                DataSource = server,
                InitialCatalog = database,

                UserID = "mobileagent",
                Password = "ra60nuicesi7qsjvcait",
                IntegratedSecurity = true,
                ConnectTimeout = 10
            }
            .ConnectionString;
            //connectionString = @"Integrated Security=SSPI;
            //Persist Security Info = False; Data Source = sql-1;
            //Initial Catalog = myDataBase; UserID = CARCADE\\mobileagent; Password = ra60nuicesi7qsjvcait ";

            Database.EnsureCreated();
        }

        public DbSet<News> News { get; set; }
        public DbSet<News_Pictures> News_Pictures { get; set; }
        public DbSet<News_To_Pictures> News_To_Pictures { get; set; }
        public DbSet<News_Filters> News_Filters { get; set; }
        public DbSet<Notification_Subscribers> Notification_Subscribers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(connectionString);
            }
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
