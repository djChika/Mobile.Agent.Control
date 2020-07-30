using Carcade.Mobile.Agent.Control.API.Models;
using Carcade.Mobile.Agent.Control.Manager;
using Carcade.Mobile.Agent.Control.Models.FromUser;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace Carcade.Mobile.Agent.Control.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationsController : Controller
    {
        private NotificationsManager _notificationsManager;

        public NotificationsController(IOptions<AppSettings> settings)
        {
            _notificationsManager = new NotificationsManager(settings);
        }


        [HttpGet("[action]")]
        public ActionResult<object> GetSubscribers()
        {
            var subscribersList = _notificationsManager.GetSubscribers();
            return new { subscribersList };
        }

        [HttpPost("[action]")]
        public void SendNotification([FromBody] SendNotificationData sendNotificationData)
        {
            _notificationsManager.SendNotification(sendNotificationData);
        }
    }
}
