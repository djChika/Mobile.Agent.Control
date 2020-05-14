namespace Carcade.Mobile.Agent.Control.API.Models.Response
{
    public class Pictures
    {
        public int Id { get; set; }
        public int Uid { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Status { get; set; } = "done";
        public string Url { get; set; }
        public string ThumbUrl { get; set; }
    }
}
