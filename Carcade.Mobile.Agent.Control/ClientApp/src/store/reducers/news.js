import initialState from '../initialState';
import {
  ADD_NEWS,
  DELETE_NEWS,
  SET_NEWS,
  UPDATE_NEWS,
  SET_FILTERS
} from '../types';

export default function (state = initialState.news, action) {
  switch (action.type) {
    case SET_NEWS: {
      const { list } = action.state;
      return {
        ...state,
        list
      };
    }

    case ADD_NEWS: {
      const { news } = action.state;
      return {
        ...state,
        list:
          state.list && state.list.length > 0 ? [news, ...state.list] : [news]
      };
    }

    case DELETE_NEWS: {
      const { index } = action.state;
      let list = state.list;
      list.splice(index, 1);
      return {
        ...state,
        list
      };
    }

    case UPDATE_NEWS: {
      const { news, index } = action.state;
      let list = state.list;
      list[index] = news;
      return {
        ...state,
        list
      };
    }

    case SET_FILTERS: {
      const { filters } = action.state;
      return {
        ...state,
        filters
      };
    }

    default: {
      return state;
    }
  }
}
