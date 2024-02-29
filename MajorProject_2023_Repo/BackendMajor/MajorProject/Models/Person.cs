using System.ComponentModel.DataAnnotations;

namespace MajorProject.Models
{
    public class Person
    {
        [Key]
        public int Id { get; set; }
        
        public string Name { get; set; }
        
        public string Email { get; set; }
        
        public long Contact { get; set; }
        public string Address { get; set; }
        public string Role { get; set; }
        public string Password { get; set; }
        public string ProfileImage { get; set; }
        public string Subscription { get; set; }
        public bool IsApproved { get; set; }

    }
}
