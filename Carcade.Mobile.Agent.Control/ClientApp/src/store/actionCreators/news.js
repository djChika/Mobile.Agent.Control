import {
  ADD_NEWS,
  DELETE_NEWS,
  SET_NEWS,
  UPDATE_NEWS,
  SET_FILTERS
} from '../types';

export const setNewsList = ({ newsList }) => ({
  type: SET_NEWS,
  state: { list: newsList }
});

export const addNewsItem = news => ({ type: ADD_NEWS, state: { news } });

export const deleteNewsItem = (news, index) => ({
  type: DELETE_NEWS,
  state: { news, index }
});

export const updateNewsItem = (news, index) => ({
  type: UPDATE_NEWS,
  state: { news, index }
});

export const setFiltersList = ({ filters }) => ({
  type: SET_FILTERS,
  state: { filters }
});
