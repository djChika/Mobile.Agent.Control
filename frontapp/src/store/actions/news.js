import axios from 'axios';
import { urls } from 'constants/urls';
import { setNews } from '../actionCreators/news';
import { setReady } from '../actionCreators/ui';

export const getNews = () => dispatch =>
  new Promise((resolve, reject) => {
    axios
      .get(urls.api.news)
      .then(res => {
        dispatch(setNews(res.data));
        dispatch(setReady('news'));
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

export const sendNews = news => dispatch =>
  new Promise((resolve, reject) => {
    axios
      .post(urls.api.news, news)
      .then(() => {
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });
