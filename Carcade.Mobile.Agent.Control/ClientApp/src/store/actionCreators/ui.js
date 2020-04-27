import { SET_READY } from '../types';

export const setReadyStore = target => ({ type: SET_READY, state: { target } });
