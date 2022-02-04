using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Chat.Api.Database
{
    public class UserContext : DbContext
    {
        public DbSet<User> Users {get; set;}
        public DbSet<Message> Messages {get; set;}

        public string DbPath {get;}

        public UserContext()
        {
            var folder = Environment.SpecialFolder.LocalApplicationData;
            var path = Environment.GetFolderPath(folder);
            DbPath = System.IO.Path.Join(path, "user.db");
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options) => options.UseSqlite($"Data Source={DbPath}");
    }

    public class User
    {
        public int UserID {get; set;}
        public string Name {get; set;}
    }
    public class Message
    {
        public int MessageID {get; set;}
        public string Text {get; set;}
        public string UserName {get; set;}
    }

}