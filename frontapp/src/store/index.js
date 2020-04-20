import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import root from './reducers';

export default function configure() {
  return createStore(root, applyMiddleware(thunk));
}
