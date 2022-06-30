using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using School_Project.Models;

namespace School_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GradesController : ControllerBase
    {
        private readonly SchoolDBContext _context;

        public GradesController(SchoolDBContext context)
        {
            _context = context;
        }

        // GET: api/Grades
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Grades>>> GetGrades()
        {
            return await _context.Grades.ToListAsync();
        }

        // GET: api/Grades/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Grades>> GetGrades(int id)
        {
            var grades = await _context.Grades.FindAsync(id);

            if (grades == null)
            {
                return NotFound();
            }

            return grades;
        }

        // PUT: api/Grades/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGrades(int id, Grades grades)
        {
            if (id != grades.Id)
            {
                return BadRequest();
            }

            _context.Entry(grades).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GradesExists(id))
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

        // POST: api/Grades
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Grades>> PostGrades(Grades grades)
        {
            _context.Grades.Add(grades);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (GradesExists(grades.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetGrades", new { id = grades.Id }, grades);
        }

        // DELETE: api/Grades/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Grades>> DeleteGrades(int id)
        {
            var grades = await _context.Grades.FindAsync(id);
            if (grades == null)
            {
                return NotFound();
            }

            _context.Grades.Remove(grades);
            await _context.SaveChangesAsync();

            return grades;
        }

        private bool GradesExists(int id)
        {
            return _context.Grades.Any(e => e.Id == id);
        }
    }
}
