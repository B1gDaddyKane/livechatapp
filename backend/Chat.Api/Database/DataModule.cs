using System;
using System.Linq;
using Chat.Api.Models;

namespace Chat.Api.Database
{
    public class DataModule
    {
        static UserContext db = new UserContext();

        public static void SaveMessage(ChatMessage message)
        {
            Console.WriteLine(db.DbPath);
            db.Add(new Message {Text = message.Message, UserName = message.User,});
            db.SaveChanges();
        }
    }
}
