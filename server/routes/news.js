const news = require('express').Router();
const { getNews } = require('../controllers/NewsController');

news.get('/api/news', function (request, response) {
  getNews().then(newsList => response.send({ newsList }));
});

news.post('/api/news/create', function (request, response) {
  const { news } = request.body;
  console.log('Create News: ', request.body);

  response.send({ news: { ...news, id: Math.floor(Math.random() * 20) + 5 } });
});

news.post('/api/news/update', function (request, response) {
  const { news } = request.body;
  console.log('Update News: ', request.body);

  response.send({ news });
});

news.post('/api/news/delete', function (request, response) {
  console.log('Delete News: ', request.body);
  response.sendStatus(200);
});

module.exports = news;
