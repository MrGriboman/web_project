using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace web_project.Models
{
    public class Questionnaire
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; } = Guid.Empty;

        public string Email { get; set; } = string.Empty;
        public List<string> KnownHobbies { get; set; } = new List<string>();
        public List<string> DesiredHobbies { get; set; } = new List<string>();
        public bool WantChatting { get; set; } = false;
        public bool IsMentor { get; set; } = false;
        public bool WantToBeMentor { get; set; } = false;
        public string About { get; set; } = string.Empty;
    }
}
