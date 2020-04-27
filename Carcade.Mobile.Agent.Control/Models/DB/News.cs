using System;
using System.ComponentModel.DataAnnotations;

namespace Carcade.Mobile.Supplier.API.Models.DB
{
    public class News
    {
        [Key]
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string ShortText { get; set; }
        public string Link { get; set; }
    }
}
