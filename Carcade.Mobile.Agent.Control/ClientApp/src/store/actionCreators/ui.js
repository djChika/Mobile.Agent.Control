import { SET_READY_STORE } from '../types';

export const setReadyStores = stores => ({
  type: SET_READY_STORE,
  state: { stores }
});
