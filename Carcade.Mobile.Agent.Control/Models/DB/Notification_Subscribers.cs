using System;
using System.ComponentModel.DataAnnotations;

namespace Carcade.Mobile.Agent.Control.API.Models.DB
{
    public class Notification_Subscribers
    {
        [Key]
        public int Id { get; set; }
        public Guid AgentId { get; set; }
        public string Device_ID { get; set; }
        public string Device_Name { get; set; }
        public string Platform { get; set; }
        public string Push_Token { get; set; }
        public string Token_Type { get; set; }
        public DateTime createdAt { get; set; }
        public DateTime updatedAt { get; set; }

    }
}
