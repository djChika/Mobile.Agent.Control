using Carcade.Mobile.Supplier.API.Manager;
using Carcade.Mobile.Supplier.API.Models;
using Carcade.Mobile.Supplier.API.Models.DB;
using Carcade.Mobile.Supplier.API.Models.FromUser;
using Carcade.Mobile.Supplier.Control.API.Models.FromUser;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System.Threading.Tasks;

namespace Carcade.Mobile.Supplier.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsController : Controller
    {
        private NewsManager _newsManager;

        public NewsController(IOptions<AppSettings> settings)
        {
            _newsManager = new NewsManager(settings);
        }

        [HttpGet("[action]")]
        public ActionResult<object> GetNews()
        {
            var newsList = _newsManager.GetNews();
            return new { newsList };
        }

        [HttpPost("[action]")]
        public async Task AddNews([FromBody] UploadNews news)
        {
            var addedNews = _newsManager.AddNews(new News
            {
                Title = news.Title,
                ShortText = news.ShortText,
                Description = news.Description,
                Link = news.Link,
                Date = System.DateTime.UtcNow
            });

            _newsManager.LinkPicturesToNews(addedNews.Id, news.PicturesIds);

            if (addedNews != null)
            {
                Response.StatusCode = 200;
                await Response.WriteAsync(JsonConvert.SerializeObject(new { news = addedNews }, new JsonSerializerSettings
                {
                    Formatting = Formatting.Indented,
                    ContractResolver = new CamelCasePropertyNamesContractResolver()
                }));
                return;
            }
            Response.StatusCode = 500;
            await Response.WriteAsync("Error while adding news");
            return;
        }

        [HttpPatch("[action]")]
        public async Task UpdateNews([FromBody] UploadNews news)
        {
            var updatedNews = _newsManager.UpdateNews(new News
            {
                Id = news.Id,
                Title = news.Title,
                ShortText = news.ShortText,
                Description = news.Description,
                Link = news.Link
            });

            _newsManager.LinkPicturesToNews(updatedNews.Id, news.PicturesIds);

            if (updatedNews != null)
            {
                Response.StatusCode = 200;
                await Response.WriteAsync(JsonConvert.SerializeObject(new { news = updatedNews }, new JsonSerializerSettings
                {
                    Formatting = Formatting.Indented,
                    ContractResolver = new CamelCasePropertyNamesContractResolver()
                }));
                return;
            }
            Response.StatusCode = 500;
            await Response.WriteAsync("Error while updating news");
            return;
        }

        [HttpDelete("[action]")]
        public async Task DeleteNews([FromQuery] int newsId)
        {
            var res = _newsManager.DeleteNews(newsId);
            if (res)
            {
                Response.StatusCode = 200;
                await Response.WriteAsync("News deleted");
                return;
            }
            Response.StatusCode = 500;
            await Response.WriteAsync("Error while deleting news");
            return;
        }


        [HttpPost("[action]")]
        public async Task UploadPicture()
        {
            var files = Request.Form.Files;
            if (files.Count > 0)
            {
                var file = files[0];
                var pictureId = _newsManager.SavePicture(file);
                Response.StatusCode = 200;
                await Response.WriteAsync(JsonConvert.SerializeObject(new { pictureId }
                    , new JsonSerializerSettings { Formatting = Formatting.Indented }));

                return;
            }
            Response.StatusCode = 500;
            await Response.WriteAsync("Error while upload image");
            return;
        }

        [HttpGet("[action]")]
        public FileResult GetPicture([FromQuery]GetNewsData getNewsData)
        {
            var picture = _newsManager.GetPicture(getNewsData.PictureId);
            return File(picture.Bin, picture.Type);
        }

        [HttpGet("[action]")]
        public ActionResult<object> GetFilters()
        {
            var filters = _newsManager.GetFilters();
            return new { filters };
        }

    }
}