using MajorProject.Context;
using MajorProject.Helper;
using MajorProject.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.DotNet.Scaffolding.Shared.Messaging;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace MajorProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccessController : ControllerBase
    {
        private readonly PersonContext _personContext;
        private readonly IConfiguration _configuration;
        public AccessController(PersonContext personContext, IConfiguration configuration) 
        {
            _personContext = personContext;
            _configuration = configuration;
        }

        [HttpPost("signin")]
        public async Task<IActionResult> SignIn([FromBody] Person person)
        {
            if (person == null) { return BadRequest(ModelState); }

            var user = await _personContext.Persons.FirstOrDefaultAsync(x => x.Email == person.Email);
            if(user == null) { return NotFound( new {Message = "User Not Found !!!"}); }

            if (!PasswordHasher.VerifyHashedPassword(user.Password, person.Password)) { return BadRequest(new { Message = "Incorrect Password !!!" }); }

            var token = GenerateJwt(user);
            return Ok(new { Token = token,Message = " LogIn Successfull . . .", user.Role, user.Id});
        }

        [HttpPost("signup")]
        public async Task<IActionResult> SignUp([FromBody] Person person)
        {
            if (person == null) { return BadRequest(ModelState); }
            if (await CheckEmailExistAsync(person.Email)) { return BadRequest(new { Message = "Email Already Exist !!!" }); }
            person.Password = PasswordHasher.HashPassword(person.Password);
            if (person.Role == "user")
            {
                person.IsApproved = true;
            }
            else person.IsApproved = false;
            await _personContext.Persons.AddAsync(person);
            await _personContext.SaveChangesAsync();

            return Ok(new { Message = " SignUp Successfull . . . " });
        }

        private async Task<bool> CheckEmailExistAsync(string email) => await _personContext.Persons.AnyAsync(x => x.Email == email);

        private string GenerateJwt(Person person)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var secreateKey = Encoding.ASCII.GetBytes(_configuration["Jwt:SecreateKey"]);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] 
                {
                    new Claim(ClaimTypes.Name, person.Name),
                    new Claim(ClaimTypes.Role, person.Role),
                    new Claim(ClaimTypes.NameIdentifier, person.Id.ToString()),
                    //new Claim("UserId",$"{person.Id}"),
                    new Claim("IsClientApproved",$"{person.IsApproved}")}),
                Expires = DateTime.UtcNow.AddMinutes(Convert.ToInt32(_configuration["Jwt:ExpirationMinutes"])),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(secreateKey),SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }


    }
}
