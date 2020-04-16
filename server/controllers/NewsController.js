const _fakeNews = [
  {
    id: 1,
    date: new Date(),
    title: 'Новость №1',
    shortText: 'blah',
    description: 'blahblahblah',
    preview: '',
    link: 'http://carcade.com'
  }
];

function getNews(req, res, next) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(_fakeNews);
    }, 3000);
  });
}

module.exports = { getNews };
