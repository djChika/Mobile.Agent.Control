import axios from 'axios';
import {
  setNewsList,
  setFiltersList,
  updateNewsItem,
  deleteNewsItem
} from '../actionCreators/news';

export const getNews = () => dispatch =>
  new Promise((resolve, reject) => {
    axios
      .get('api/news/getNews')
      .then(res => {
        const { newsList } = res.data;
        dispatch(setNewsList({ newsList }));
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

export const getFilters = () => dispatch =>
  new Promise((resolve, reject) => {
    axios
      .get('api/news/getFilters')
      .then(res => {
        const { filters } = res.data;
        dispatch(setFiltersList({ filters }));
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

const SEND_MODES = {
  add: {
    method: 'POST',
    url: '/api/News/AddNews'
  },
  update: {
    method: 'PATCH',
    url: '/api/News/UpdateNews'
  }
};

export const sendNews = (news, index) => dispatch =>
  new Promise((resolve, reject) => {
    const mode = news.id ? 'update' : 'add';

    axios({
      method: SEND_MODES[mode].method,
      url: SEND_MODES[mode].url,
      data: { ...news, pictures: null }
    })
      .then(res => {
        const {
          news: { id }
        } = res.data;
        dispatch(updateNewsItem({ ...news, id }, index));
        resolve({ news: { ...news, id } });
      })
      .catch(err => {
        reject(err);
      });
  });

export const deleteNews = (news, index) => dispatch =>
  new Promise((resolve, reject) => {
    axios({
      method: 'DELETE',
      url: '/api/news/DeleteNews',
      params: { newsId: news.id }
    })
      .then(() => {
        dispatch(deleteNewsItem(news, index));
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });
