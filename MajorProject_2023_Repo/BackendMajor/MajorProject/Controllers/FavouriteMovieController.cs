using MajorProject.Models;
using MajorProject.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MajorProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavouriteMovieController : ControllerBase
    {
        private readonly IFavouriteService _favouriteService;

        public FavouriteMovieController(IFavouriteService favouriteService)
        {
            _favouriteService= favouriteService;
        }

        [HttpPost("/Person/favouriteMovie/add")]
       
        public IActionResult AddFavouriteMovie(FavMovie favMovie)
        {
            if(_favouriteService.AddFavouriteMovie(favMovie))
            {
                return Ok(new { response = true, Message = "fav movie added" });
            }
            else
            {
                return BadRequest(new { response = false, Message = "fav removed" });
            }
        }

        [HttpGet("/Person/favouriteMovie/{id}")]
      
        public IActionResult GetFavouriteList(int id)
        {
            List<Movie> myFavourite = _favouriteService.GetFavouriteMovie(id);
            return Ok(myFavourite);
        }
    }
}
