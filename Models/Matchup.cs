using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace web_project.Models
{
    public class Matchup
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; } = Guid.Empty;
        public string Date { get; set; } = string.Empty;

        public string Format { get; set; } = string.Empty;
        public string CompanionLink { get; set; } = string.Empty;
        public string CompanionEmail { get; set; } = string.Empty;
        public int Rating { get; set; } = 0;
        public string Review { get; set; } = string.Empty;

    }
}
