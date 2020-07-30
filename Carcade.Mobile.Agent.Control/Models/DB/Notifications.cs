using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Carcade.Mobile.Agent.Control.Models.DB
{
    public class Notifications
    {
        public int ID { get; set; }
        public Guid AgentId { get; set; }
        public string Target { get; set; }
        public string Data { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public bool isRead { get; set; }
        public DateTime createdAt { get; set; }
    }
}
