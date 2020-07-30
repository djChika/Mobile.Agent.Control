using Carcade.Mobile.Agent.Control.API.Context;
using Carcade.Mobile.Agent.Control.API.Models;
using Carcade.Mobile.Agent.Control.API.Models.DB;
using Carcade.Mobile.Agent.Control.Models.FromUser;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;

namespace Carcade.Mobile.Agent.Control.Manager
{
    public class NotificationsManager
    {
        private Carcade_MobileSupplier_DB_Context db;
        private MobileSupplierService.ISupplierMobileService supplierMobileService;

        public NotificationsManager(IOptions<AppSettings> settings)
        {
            db = new Carcade_MobileSupplier_DB_Context(settings);
            supplierMobileService = new MobileSupplierService.SupplierMobileServiceClient();
        }
        public List<Notification_Subscribers> GetSubscribers()
        {
            var subscribers = db.Notification_Subscribers.ToList();
            return subscribers;
        }

        public void SendNotification(SendNotificationData sendNotificationData)
        {
            string url = "http://localhost:5002/api/push/all";

            var proxy = new WebProxy();
            var httpClientHandler = new HttpClientHandler
            {
                Proxy = proxy,
            };

            using (var client = new HttpClient(httpClientHandler))
            {
                client.Timeout = TimeSpan.FromSeconds(10);

                var serializerSettings = new JsonSerializerSettings();
                serializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
                var json = JsonConvert.SerializeObject(sendNotificationData, serializerSettings);
                var data = new StringContent(json, Encoding.UTF8, "application/json");

                var response = client.PostAsync(url, data).Result;
                var result = response.Content.ReadAsStringAsync().Result;

                if (!response.IsSuccessStatusCode || response.StatusCode != HttpStatusCode.OK)
                {
                    throw new Exception("Error while sending notifications!");
                }
            }
        }
    }
}
