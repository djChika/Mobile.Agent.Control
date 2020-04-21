import { ADD_NEWS, DELETE_NEWS, SET_NEWS, UPDATE_NEWS } from '../types';

export const setNewsList = list => ({ type: SET_NEWS, state: { list } });
export const addNewsItem = news => ({ type: ADD_NEWS, state: { news } });
export const deleteNewsItem = (news, index) => ({
  type: DELETE_NEWS,
  state: { news, index }
});
export const updateNewsItem = (news, index) => ({
  type: UPDATE_NEWS,
  state: { news, index }
});
