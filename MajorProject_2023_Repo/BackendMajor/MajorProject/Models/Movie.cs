using System.ComponentModel.DataAnnotations;

namespace MajorProject.Models
{
    public class Movie
    {
        [Key]
        public int Id { get; set; }

        public int PersonId { get; set; }
        public string Title { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string Description { get; set; }
        public string Subscription { get; set; }
        public string PosterUrl { get; set; }
        public string TrailerUrl { get; set; }
        public string MovieUrl { get; set; }
        public string Genre { get; set; }
       

    }
}
