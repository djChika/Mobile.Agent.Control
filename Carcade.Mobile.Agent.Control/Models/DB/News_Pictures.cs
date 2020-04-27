using System;

namespace Carcade.Mobile.Supplier.API.Models.DB
{
    public class News_Pictures
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public byte[] Bin { get; set; }
        public int Size { get; set; }
        //public DateTime Date { get; set; }
    }
}
