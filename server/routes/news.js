const news = require('express').Router();
const { getNews } = require('../controllers/NewsController');

news.get('/api/news', function (request, response) {
  getNews().then(res => response.send(res));
});

module.exports = news;
