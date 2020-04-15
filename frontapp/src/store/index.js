import { createStore } from 'redux';
import root from './reducers';
import initialState from './initialState';

export default function configure() {
  return createStore(root, initialState);
}
