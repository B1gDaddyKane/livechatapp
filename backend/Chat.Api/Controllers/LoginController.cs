using Microsoft.AspNetCore.Mvc;
using Chat.Api.Database;
using Chat.Api.Models;
using System;

namespace Chat.Api.Controllers
{
    [ApiController]
    [Route("login")]
    public class LoginController : ControllerBase
    {
        [HttpPost]
        public ActionResult<bool> login(LoginMessage message)
        {  
          return DataModule.CheckUser(message.Name);
        }
    }
}