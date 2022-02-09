namespace Chat.Api.Models
{
    public class LoginMessage
    {
        public string Name {get; set;}
        public string Password{get; set;}

        public override string ToString()
        {
            return "LoginMessage: " + Name + " " + Password;
        }
    }
}