using Chat.Api.Models;
using System.Threading.Tasks;
using Chat.Api.Hubs.Clients;
using Microsoft.AspNetCore.SignalR;
using System;
using Chat.Api.Database;

namespace Chat.Api.Hubs
{
    public class ChatHub : Hub<IChatClient>
    {
        public async Task SendMessage(ChatMessage message)
        {
            message = ChatFilter.CheckMessage(message);
            await Clients.All.ReceiveMessage(message);
        }
    }

    public class ChatFilter
    {
        public static ChatMessage CheckMessage(ChatMessage message)
        {
            string[] BannedWords = new string[] {"covid-19","lockdown","kanye"};
            string text = message.Message.ToLower();
            foreach (var item in BannedWords)
            {
                if(text.Contains(item))
                {
                    DataModule.SaveMessage(message);
                    message.Message = "The message contained a banned word and was therefore deleted";
                }
            }
            Console.WriteLine(message.Message);
            return message;
        }
    }
}
