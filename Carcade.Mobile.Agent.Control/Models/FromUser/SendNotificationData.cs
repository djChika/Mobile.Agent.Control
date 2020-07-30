using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Carcade.Mobile.Agent.Control.Models.FromUser
{
    public class Data
    {
        public string Target { get; set; }
    }
    public class SendNotificationData
    {
        //agentIds, title, body, data
        public string[] AgentIds { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public Data Data { get; set; }
    }
}
