import { combineReducers } from 'redux';

import news from './news';
import ui from './ui';

const reducers = combineReducers({
  news,
  ui
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined;
  }
  return reducers(state, action);
};

export default rootReducer;
