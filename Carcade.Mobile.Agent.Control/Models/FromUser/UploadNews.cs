using Carcade.Mobile.Supplier.API.Models.Response;
using System;

namespace Carcade.Mobile.Supplier.API.Models.FromUser
{
    public class UploadNews
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string ShortText { get; set; }
        public string Link { get; set; }
        public int[] PicturesIds { get; set; }
        //public Pictures[] Pictures { get; set; }
    }
}
