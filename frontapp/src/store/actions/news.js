import axios from 'axios';
import { SET_NEWS } from '../types';

export function getNews() {
  return axios.get('/api/news').then(res => {
    global.store.dispatch({
      type: SET_NEWS,
      state: {
        list: res.data
      }
    });
  });
}
