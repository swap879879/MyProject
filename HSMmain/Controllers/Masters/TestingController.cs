using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HSMmain.Controllers.Masters
{
    public class TestingController : Controller
    {
        // GET: Testing
        public ActionResult Test()
        {
            return View("~/Views/Masters/Testing.cshtml");
        }
    }
}