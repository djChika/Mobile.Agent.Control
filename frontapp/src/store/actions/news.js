import axios from 'axios';
import { SET_NEWS, SET_READY } from '../types';
import { urls } from 'constants/urls';

export function getNews() {
  return new Promise((resolve, reject) => {
    return axios
      .get(urls.api.news)
      .then(res => {
        global.store.dispatch({
          type: SET_NEWS,
          state: {
            list: res.data
          }
        });
        global.store.dispatch({
          type: SET_READY,
          state: {
            target: 'news'
          }
        });
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function sendNews(data) {
  return axios
    .post(urls.api.news, data)
    .then(res => {
      return res;
    })
    .catch(err => err);
}
