using System.ComponentModel.DataAnnotations;

namespace MajorProject.Models
{
    public class TvShow
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string Description { get; set; }
        public string Subscription { get; set; }
        public string Genre { get; set; }
        public string Country { get; set; }
        public string PosterUrl { get; set; }
        public string TrailerUrl { get; set; }
        public string TvShowUrl { get; set; }

    }
}
