import initialState from '../initialState';
import { SET_READY } from '../types';

export default function (state = initialState.ui, action) {
  switch (action.type) {
    case SET_READY: {
      const { target } = action.state;
      return {
        ...state,
        [target]: {
          isReady: true
        }
      };
    }
    default: {
      return state;
    }
  }
}
