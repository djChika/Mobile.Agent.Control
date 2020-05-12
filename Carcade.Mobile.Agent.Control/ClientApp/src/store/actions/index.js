import { getNewsData, sendNews, deleteNews } from 'store/actions/news';

export default {
  news: {
    init: ['getNewsData'],
    getNewsData,
    sendNews,
    deleteNews
  }
};
