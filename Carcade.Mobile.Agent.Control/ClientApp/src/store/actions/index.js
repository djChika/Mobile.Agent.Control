import { getNews, getFilters, sendNews, deleteNews } from 'store/actions/news';

export default {
  news: {
    init: ['getNews', 'getFilters'],
    getNews,
    getFilters,
    sendNews,
    deleteNews
  }
};
