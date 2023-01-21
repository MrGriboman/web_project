using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;
using web_project.Enums;

namespace web_project.Models
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; } = Guid.Empty;
        public string Login { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;  
        public string Role { get; set; } = string.Empty;
        
    }
}
