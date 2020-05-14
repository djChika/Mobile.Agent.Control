using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Carcade.Mobile.Agent.Control.API.Models
{
    public class Credentials
    {
        public string Phonenumber { get; set; }
        public string Password { get; set; }
        public string Token { get; set; }
        public string RefreshToken { get; set; }
        //public string Role { get; set; }
    }
}
