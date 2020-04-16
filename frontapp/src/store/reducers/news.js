import initialState from '../initialState';
import { SET_NEWS } from '../types';

export default function (state = initialState.news, action) {
  switch (action.type) {
    case SET_NEWS: {
      const { list } = action.state;
      return {
        ...state,
        list
      };
    }
    default: {
      return state;
    }
  }
}
