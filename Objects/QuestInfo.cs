namespace web_project.Objects
{
    public class QuestInfo
    {
        public string Email { get; set; } = string.Empty;
        public List<string> KnownHobbies { get; set; } = new List<string>();
        public List<string> DesiredHobbies { get; set; } = new List<string>();
        public bool WantChatting { get; set; } = false;
        public bool IsMentor { get; set; } = false; 
        public bool WantToBeMentor { get; set; } = false;
        public string About { get; set; } = string.Empty;

    }
}
