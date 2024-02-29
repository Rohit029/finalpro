using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MajorProject.Context;
using MajorProject.Models;

namespace MajorProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavTvShowsController : ControllerBase
    {
        private readonly PersonContext _context;

        public FavTvShowsController(PersonContext context)
        {
            _context = context;
        }

        // GET: api/FavTvShows
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FavTvShow>>> GetFavTvShows()
        {
            return await _context.FavTvShows.ToListAsync();
        }

        // GET: api/FavTvShows/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FavTvShow>> GetFavTvShow(int id)
        {
            var favTvShow = await _context.FavTvShows.FindAsync(id);

            if (favTvShow == null)
            {
                return NotFound();
            }

            return favTvShow;
        }

        // PUT: api/FavTvShows/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFavTvShow(int id, FavTvShow favTvShow)
        {
            if (id != favTvShow.Id)
            {
                return BadRequest();
            }

            _context.Entry(favTvShow).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FavTvShowExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/FavTvShows
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<FavTvShow>> PostFavTvShow(FavTvShow favTvShow)
        {
            _context.FavTvShows.Add(favTvShow);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFavTvShow", new { id = favTvShow.Id }, favTvShow);
        }

        // DELETE: api/FavTvShows/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFavTvShow(int id)
        {
            var favTvShow = await _context.FavTvShows.FindAsync(id);
            if (favTvShow == null)
            {
                return NotFound();
            }

            _context.FavTvShows.Remove(favTvShow);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FavTvShowExists(int id)
        {
            return _context.FavTvShows.Any(e => e.Id == id);
        }
    }
}
