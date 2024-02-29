using MajorProject.Models;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

namespace MajorProject.Context
{
    public class PersonContext : DbContext
    {
        public PersonContext(string connection) { }

        public PersonContext(DbContextOptions<PersonContext> options) : base(options) { }

        public virtual DbSet<Person> Persons { get; set; }
        public virtual DbSet<Movie> Movies { get; set; }
        public virtual DbSet<TvShow> TvShows { get; set; }
        public virtual DbSet<Song> Songs { get; set; }
        public virtual DbSet<FavMovie> FavMovies { get; set; }
        public virtual DbSet<FavTvShow> FavTvShows { get; set; }
        public virtual DbSet<FavSong> FavSongs { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {

                optionsBuilder.UseSqlServer("Data Source=CVC237;Initial Catalog=MajorProject;Persist Security Info=True;User ID=sa;Password=cybage@123456;Encrypt=false");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Person>().ToTable(nameof(Person));
        }
    }
}

