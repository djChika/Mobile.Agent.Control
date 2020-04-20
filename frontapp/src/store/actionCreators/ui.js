import { SET_READY } from '../types';

export const setReady = target => ({ type: SET_READY, state: { target } });
