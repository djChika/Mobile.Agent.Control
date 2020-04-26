namespace Carcade.Mobile.Supplier.API.Models
{
    public class AppSettings
    {
        public Context Context { get; set; }
    }

    public class Context
    {
        public string Server { get; set; }
        public string Database { get; set; }
        public string CRM { get; set; }
    }
}
