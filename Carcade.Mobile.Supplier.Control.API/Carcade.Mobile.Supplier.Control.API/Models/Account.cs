using System;
using System.ComponentModel.DataAnnotations;

namespace Carcade.Mobile.Supplier.API.Models
{
    public class Account
    {
        [Key]
        public int Id { get; set; }
        public Guid AgentId { get; set; }
        public Guid AuthorizeId { get; set; }
        //public string PhoneNumber { get; set; }
        //public string Password { get; set; }
        public string Token { get; set; }
        public string RefreshToken { get; set; }
        public DateTime RegisterDate { get; set; }
        public DateTime ExpiresAt { get; set; }
    }
}
