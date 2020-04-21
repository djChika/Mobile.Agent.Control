import axios from 'axios';
import { urls } from 'constants/urls';
import {
  setNewsList,
  deleteNewsItem,
  updateNewsItem
} from '../actionCreators/news';
import { setReadyStore } from '../actionCreators/ui';

export const getNews = () => dispatch =>
  new Promise((resolve, reject) => {
    axios
      .get(urls.api.news)
      .then(res => {
        const { newsList } = res.data;
        dispatch(setNewsList(newsList));
        dispatch(setReadyStore('news'));
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

export const sendNews = (news, index) => dispatch =>
  new Promise((resolve, reject) => {
    const mode = news.id ? 'update' : 'create';
    axios
      .post(urls.api.news + `/${mode}`, { news })
      .then(res => {
        const { news } = res.data;
        dispatch(updateNewsItem(news, index));
        resolve({ news });
      })
      .catch(err => {
        reject(err);
      });
  });

export const deleteNews = (news, index) => dispatch =>
  new Promise((resolve, reject) => {
    axios
      .post(urls.api.news + '/delete', news)
      .then(() => {
        dispatch(deleteNewsItem(news, index));
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });
