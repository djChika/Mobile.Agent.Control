import initialState from '../initialState';
import { SET_NEWS, ADD_NEWS } from '../types';

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
    default: {
      return state;
    }
  }
}
