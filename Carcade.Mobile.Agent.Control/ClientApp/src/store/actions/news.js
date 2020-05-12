import axios from 'axios';
import {
  setNewsList,
  deleteNewsItem,
  updateNewsItem,
  setFiltersList
} from '../actionCreators/news';
import { setReadyStore } from '../actionCreators/ui';

/**
 * GET MAIN DATA
 */

let dataTargets = [
  {
    request: axios.get('api/news/getNews'),
    actionCreator: setNewsList
  },
  {
    request: axios.get('api/news/getFilters'),
    actionCreator: setFiltersList
  }
];

export const getNewsData = () => dispatch =>
  new Promise((resolve, reject) => {
    let requests = dataTargets.map(x => x.request);
    axios
      .all(requests)
      .then(
        axios.spread((...responses) => {
          responses.map((response, i) => {
            if (!response.data || Object.keys(responses[i].data).length === 0)
              reject();

            dispatch(dataTargets[i].actionCreator(responses[i].data));
          });

          dispatch(setReadyStore('news'));
          resolve();
        })
      )
      .catch(errors => {
        reject();
      });
  });

/**
 * GET MAIN DATA
 */

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
