using Chat.Api.Models;
using System.Threading.Tasks;
using Chat.Api.Hubs.Clients;
using Microsoft.AspNetCore.SignalR;

namespace Chat.Api.Hubs
{
    public class ChatHub : Hub<IChatClient>
    {
        public async Task SendMessage(ChatMessage message)
        {
            await Clients.All.ReceiveMessage(message);
        }
    }
}
