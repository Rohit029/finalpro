namespace MajorProject.Models
{
    public class Song
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string Lyrics { get; set; }
        public string Singer { get; set; }
        public string Genre { get; set; }
        public string Country { get; set; }
        public string PosterUrl { get; set; }
        public string AudioUrl { get; set; }
        
    }
}
