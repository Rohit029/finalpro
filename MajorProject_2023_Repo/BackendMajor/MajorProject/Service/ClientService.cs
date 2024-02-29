using MajorProject.Context;
using MajorProject.Models;
using Microsoft.EntityFrameworkCore;

namespace MajorProject.Service
{
    public class ClientService : IClientService
    {
        private readonly PersonContext _context;
        public ClientService(PersonContext context)
        {
            _context = context;
        }
        public void AddMovie(Movie movie)
        {
            _context.Movies.Add(movie);
            _context.SaveChanges();
        }

        public Movie GetMovieById(int id)
        {
            return _context.Movies.Find(id);
        }
        public async Task<IEnumerable<Movie>> GetMovieByClientId(int id)
        {
           if(_context.Movies == null)
            {
                return null;
            }
           return await _context.Movies.Where(m => m.PersonId == id).ToListAsync();
        }

        public List<Movie> GetAllMovies()
        {
            return _context.Movies.ToList();
        }

        public void RemoveMovie(int id)
        {
            var movieId = _context.Movies.Find(id);

            if(movieId != null)
            {
                _context.Movies.Remove(movieId);
                _context.SaveChanges();
            }
        }

        public bool UpdateMovie(int id, Movie movie)
        {
            if (id == movie.Id)
            {
                _context.Entry(movie).State = EntityState.Modified;
                _context.SaveChanges();
                return true;
            }
            return false;
        }

        public void AddTvShow(TvShow tvshow)
        {
            _context.TvShows.Add(tvshow);
            _context.SaveChanges();
        }

        public List<TvShow> GetAllTvShows()
        {
            return _context.TvShows.ToList();
        }

        public TvShow GetTvShowById(int id)
        {
            return _context.TvShows.Find(id);
        }

        public bool UpdateTvShow(int id, TvShow tvshow)
        {
            if (id == tvshow.Id)
            {
                _context.Entry(tvshow).State = EntityState.Modified;
                _context.SaveChanges();
                return true;
            }
            return false;
        }

        public void RemoveTvShow(int id)
        {
            var tvId = _context.TvShows.Find(id);

            if (tvId != null)
            {
                _context.TvShows.Remove(tvId);
                _context.SaveChanges();
            }
        }

        public void AddSong(Song song)
        {
            _context.Songs.Add(song);
            _context.SaveChanges();
        }

        public List<Song> GetAllSongs()
        {
            return _context.Songs.ToList();
        }

        public Song GetSongById(int id)
        {
            return _context.Songs.Find(id);
        }

        public bool UpdateSong(int id, Song song)
        {
            if (id == song.Id)
            {
                _context.Entry(song).State = EntityState.Modified;
                _context.SaveChanges();
                return true;
            }
            return false;
        }

        public void RemoveSong(int id)
        {
            var songId = _context.Songs.Find(id);

            if (songId != null)
            {
                _context.Songs.Remove(songId);
                _context.SaveChanges();
            }
        }

     
    }
}
