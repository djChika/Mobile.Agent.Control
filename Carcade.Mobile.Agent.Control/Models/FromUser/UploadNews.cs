using System;

namespace Carcade.Mobile.Agent.Control.API.Models.FromUser
{
    public class Filter
    {
        public string Type { get; set; }
        public string Value { get; set; }
    }
    public class UploadNews
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string ShortText { get; set; }
        public string Link { get; set; }
        public int[] PicturesIds { get; set; }
        public Filter[] Filters { get; set; }
    }
}
