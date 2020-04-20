import { ADD_NEWS, DELETE_NEWS, SET_NEWS } from '../types';

export const setNews = list => ({ type: SET_NEWS, state: { list } });
export const addNews = news => ({ type: ADD_NEWS, state: { news } });
export const deleteNews = news => ({ type: DELETE_NEWS, state: { news } });
