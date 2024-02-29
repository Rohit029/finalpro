using MajorProject.Context;
using MajorProject.Models;

namespace MajorProject.Service
{
    public class FavouriteService : IFavouriteService
    {
        private readonly PersonContext _context;
        public FavouriteService(PersonContext context)
        {
            _context = context;
        }
        public bool AddFavouriteMovie(FavMovie favMovie)
        {
            var fav = from f in _context.FavMovies where f.Id == favMovie.Id && f.Movie_Id == favMovie.Movie_Id select f;
            if(fav.Count()>0)
            {
                return false;

            }
            _context.FavMovies.Add(favMovie);
            _context.SaveChanges();
            return true;
        }

   
        public List<Movie> GetFavouriteMovie(int id)
        {
            var output = from Movie in _context.Movies where (from f in _context.FavMovies where f.User_Id == id select f.Movie_Id).Contains(Movie.Id) select Movie;
            return output.ToList();
        }
    }
}
