using System;
using System.Web;
using System.Web.Mvc;

namespace Chat.Api.Controllers
{
    public class LoginController : Controller
    {
        [Route("/login")]
        public ActionResult login()
        {
            ViewData["Message"] = "This is test string";
            return View();
        }
    }
}