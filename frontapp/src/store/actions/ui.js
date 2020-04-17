import { SET_READY } from '../types';

export function setReady(target) {
  global.store.dispatch({
    type: SET_READY,
    state: {
      target
    }
  });
}
