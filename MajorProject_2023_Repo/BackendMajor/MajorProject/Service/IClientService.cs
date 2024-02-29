using MajorProject.Models;

namespace MajorProject.Service
{
    public interface IClientService
    {
        public void AddMovie(Movie movie);
        public List<Movie> GetAllMovies();
        public Movie GetMovieById(int id);
        public bool UpdateMovie(int id, Movie movie);
        public void RemoveMovie(int id);

        public void AddTvShow(TvShow tvshow);
        public List<TvShow> GetAllTvShows();
        public TvShow GetTvShowById(int id);
        public bool UpdateTvShow(int id, TvShow tvshow);
        public void RemoveTvShow(int id);

        public Task<IEnumerable<Movie>> GetMovieByClientId(int id);

        public void AddSong(Song song);
        public List<Song> GetAllSongs();
        public Song GetSongById(int id);
        public bool UpdateSong(int id, Song song);
        public void RemoveSong(int id);

    }
}
