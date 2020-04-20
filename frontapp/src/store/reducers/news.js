import initialState from '../initialState';
import { ADD_NEWS, DELETE_NEWS, SET_NEWS } from '../types';

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
        list: [...state.list, news]
      };
    }
    case DELETE_NEWS: {
      const { news } = action.state;
      return {
        ...state,
        list: state.list.filter(x => x !== news)
      };
    }
    default: {
      return state;
    }
  }
}
