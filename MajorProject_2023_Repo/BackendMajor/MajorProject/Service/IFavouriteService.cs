using MajorProject.Models;

namespace MajorProject.Service
{
    public interface IFavouriteService
    {
        public bool AddFavouriteMovie(FavMovie favMovie);
        public List<Movie> GetFavouriteMovie(int id);
    }
}
