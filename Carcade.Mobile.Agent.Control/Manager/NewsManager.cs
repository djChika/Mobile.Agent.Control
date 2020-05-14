using Carcade.Mobile.Agent.Control.API.Context;
using Carcade.Mobile.Agent.Control.API.Models;
using Carcade.Mobile.Agent.Control.API.Models.DB;
using Carcade.Mobile.Agent.Control.API.Models.FromUser;
using Carcade.Mobile.Agent.Control.API.Models.Response;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Carcade.Mobile.Agent.Control.API.Manager
{
    public class NewsManager
    {
        private Carcade_MobileSupplier_DB_Context db;
        private MobileSupplierService.ISupplierMobileService supplierMobileService;

        public NewsManager(IOptions<AppSettings> settings)
        {
            db = new Carcade_MobileSupplier_DB_Context(settings);
            supplierMobileService = new MobileSupplierService.SupplierMobileServiceClient();
        }

        private List<Pictures> GetPictures(int newsId)
        {
            var query = from picture in db.News_Pictures
                        join ntp in db.News_To_Pictures on picture.Id equals ntp.PictureId
                        where ntp.NewsId == newsId
                        select new Pictures
                        {
                            Id = picture.Id,
                            Uid = picture.Id,
                            Name = picture.Name,
                            Type = picture.Type,
                            Status = "done",
                            Url = "/api/News/GetPicture?pictureId=" + picture.Id,
                            ThumbUrl = "",
                            //Response = new { pictureId = picture.Id }
                        };
            var pictures = query.ToList();
            return pictures;
        }

        private List<News_Filters> GetFilters(int newsId)
        {
            var query = db.News_Filters.Where(x => x.NewsId == newsId).ToList();
            var filters = query.ToList();
            return filters;
        }

        private IEnumerable<object> AttachPicturesAndFiltersToNews(List<News> news)
        {
            var newsWithPictures = news.Select(n =>
            {
                var pictures = GetPictures(n.Id);
                var picturesIds = new List<int>();
                pictures.ForEach(pic => { picturesIds.Add(pic.Id); });

                var filters = GetFilters(n.Id);
                return new
                {
                    n.Id,
                    n.Title,
                    n.Date,
                    n.Description,
                    n.ShortText,
                    n.Link,
                    pictures,
                    picturesIds,
                    filters
                };
            });
            return newsWithPictures;
        }

        public object GetNews()
        {
            var news = db.News.OrderByDescending(x => x.Date).ToList();
            var newsWithPictures = AttachPicturesAndFiltersToNews(news);
            return newsWithPictures;
        }

        public void SaveNewsFilters(int newsId, Filter[] Filters)
        {
            db.News_Filters.RemoveRange(db.News_Filters.Where(x => x.NewsId == newsId));

            if (Filters.Count() > 0)
            {
                foreach (var filter in Filters)
                {
                    db.News_Filters.Add(new News_Filters
                    {
                        NewsId = newsId,
                        Type = filter.Type,
                        Value = filter.Value
                    });
                }
            }

            db.SaveChanges();
        }

        public News AddNews(News news)
        {
            try
            {
                db.News.Add(news);
                db.SaveChanges();
                return news;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public News UpdateNews(News news)
        {
            var targetNews = db.News.FirstOrDefault(x => x.Id == news.Id);
            if (targetNews != null)
            {
                targetNews.Title = news.Title;
                targetNews.ShortText = news.ShortText;
                targetNews.Description = news.Description;
                targetNews.Link = news.Link;
                db.SaveChanges();
                return targetNews;
            }
            return null;

        }

        public bool DeleteNews(int newsId)
        {
            try
            {
                var targetNews = db.News.FirstOrDefault(x => x.Id == newsId);
                if (targetNews != null)
                {
                    db.News.Remove(targetNews);
                    var res = db.SaveChanges();
                    return res == 1;
                }
                return false;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public void LinkPicturesToNews(int newsId, int[] pictureIds)
        {
            db.News_To_Pictures.RemoveRange(db.News_To_Pictures.Where(link => link.NewsId == newsId));

            foreach (var pictureId in pictureIds)
            {
                db.News_To_Pictures.Add(new News_To_Pictures
                {
                    NewsId = newsId,
                    PictureId = pictureId
                });
            }

            db.SaveChanges();
        }

        public object SavePicture(IFormFile file)
        {
            byte[] fileData = new byte[file.Length];
            using (var ms = new MemoryStream())
            {
                file.CopyTo(ms);
                fileData = ms.ToArray();
            }

            var picture = new News_Pictures()
            {
                Name = file.FileName,
                Type = file.ContentType,
                Bin = fileData,
                Size = (int)file.Length,
            };

            db.News_Pictures.Add(picture);
            var res = db.SaveChanges();
            if (res == 1)
            {
                return picture.Id;
            }
            return null;
        }

        public News_Pictures GetPicture(int pictureId)
        {
            var picture = db.News_Pictures.FirstOrDefault(x => x.Id == pictureId);
            return picture;
        }

        public object GetFilters()
        {
            var res = supplierMobileService.GetFiltersListAsync(new MobileSupplierService.GetFiltersListRequest() { }).Result;

            /*
             * Fix dublicates
             * **/
            //foreach (var filter in res.Filters)
            //{
            //    filter.Items = filter.Items
            //        .GroupBy(x => x.Id).Where(x => x.Count() == 1)
            //        .Select(x => x.First())
            //        .ToArray();
            //}

            if (res.Success)
            {
                return res.Filters;
            }
            return null;
        }
    }
}
