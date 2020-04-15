import { combineReducers } from 'redux';

import news from './news';

const reducers = combineReducers({
  news
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined;
  }
  return reducers(state, action);
};

export default rootReducer;
