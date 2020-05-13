import initialState from '../initialState';
import { SET_READY_STORE } from '../types';

export default function (state = initialState.ui, action) {
  switch (action.type) {
    case SET_READY_STORE: {
      const { stores } = action.state;
      let readyStores = Object.assign(
        {},
        ...stores.map(x => ({ [x]: { isReady: true } }))
      );

      return {
        ...state,
        ...readyStores
      };
    }
    default: {
      return state;
    }
  }
}
