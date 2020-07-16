import { getNews, getFilters, sendNews, deleteNews } from './news';
import { getSubscribers, sendNotification } from './notifications';

export default {
  news: {
    init: ['getNews', 'getFilters'],
    getNews,
    getFilters,
    sendNews,
    deleteNews
  },
  notifications: {
    init: ['getSubscribers'],
    getSubscribers,
    sendNotification
  }
};
