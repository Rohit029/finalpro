using MajorProject.Models;
using MajorProject.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MajorProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        private readonly IClientService _clientService;

        public ClientController(IClientService clientService)
        {
            _clientService = clientService;
        }

        [HttpPost("/addmovie")]
        public async Task<ActionResult<Movie>> AddMovie(Movie movie)
        {
            _clientService.AddMovie(movie);
            return movie;
        }

        [HttpGet("/getallmovies")]
        public async Task<ActionResult<List<Movie>>> GetAllMovies()
        {
            return _clientService.GetAllMovies();
        }

        [HttpGet("movieid/{id}")]
        public async Task<ActionResult<Movie>> GetMovieById(int id)
        {
            return _clientService.GetMovieById(id);
        }


       


        [HttpGet("movList/{id}")]
        public Task<IEnumerable<Movie>> GetMovieByClientId(int id)
        {
            var movList = _clientService.GetMovieByClientId(id);
            if(movList == null)
            {
                throw new DirectoryNotFoundException("Not");

            }
            return movList;
        }

        [HttpPut("editmovie/{id}")]

        public async Task<ActionResult<Movie>> UpdateMovie(int id, Movie movie)
        {
            _clientService.UpdateMovie(id, movie);
            return movie;
        }

        [HttpDelete("deletemovie/{id}")]

        public async Task<ActionResult<Movie>> RemoveMovie(int id)
        {
            _clientService.RemoveMovie(id);
            return Ok();
        }


        /* TV SHOW CONTROLLER*/
        [HttpPost("/addtvshow")]
        public async Task<ActionResult<TvShow>> AddTvShow(TvShow tvshow)
        {
            _clientService.AddTvShow(tvshow);
            return tvshow;
        }

        [HttpGet("/getalltvshows")]
        public async Task<ActionResult<List<TvShow>>> GetAllTvShows()
        {
            return _clientService.GetAllTvShows();
        }

        [HttpGet("tvshowid/{id}")]
        public async Task<ActionResult<TvShow>> GetTvShowById(int id)
        {
            return _clientService.GetTvShowById(id);
        }

        [HttpPut("edittvshow/{id}")]

        public async Task<ActionResult<TvShow>> UpdateTvShow(int id, TvShow tvshow)
        {
            _clientService.UpdateTvShow(id, tvshow);
            return tvshow;
        }

        [HttpDelete("deletetvshow/{id}")]

        public async Task<ActionResult<TvShow>> RemoveTvShow(int id)
        {
            _clientService.RemoveTvShow(id);
            return Ok();
        }


        /* SONG CONTROLLER*/
        [HttpPost("/addsong")]
        public async Task<ActionResult<Song>> AddSong(Song song)
        {
            _clientService.AddSong(song);
            return song;
        }

        [HttpGet("/getallsongs")]
        public async Task<ActionResult<List<Song>>> GetAllSongs()
        {
            return _clientService.GetAllSongs();
        }

        [HttpGet("songid/{id}")]
        public async Task<ActionResult<Song>> GetSongById(int id)
        {
            return _clientService.GetSongById(id);
        }

        [HttpPut("editsong/{id}")]

        public async Task<ActionResult<Song>> UpdateSong(int id, Song song)
        {
            _clientService.UpdateSong(id, song);
            return song;
        }

        [HttpDelete("deletesong/{id}")]

        public async Task<ActionResult<Song>> RemoveSong(int id)
        {
            _clientService.RemoveSong(id);
            return Ok();
        }

    }
}
