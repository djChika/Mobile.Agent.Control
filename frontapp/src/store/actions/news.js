import axios from 'axios';
import { SET_NEWS } from '../types';
import { urls } from 'constants/urls';

export function getNews() {
  return axios.get(urls.api.news).then(res => {
    global.store.dispatch({
      type: SET_NEWS,
      state: {
        list: res.data
      }
    });
  });
}

export function sendNews(data) {
  return axios
    .post(urls.api.news, data)
    .then(res => {
      return res;
    })
    .catch(() => {
      return false;
    });
}
