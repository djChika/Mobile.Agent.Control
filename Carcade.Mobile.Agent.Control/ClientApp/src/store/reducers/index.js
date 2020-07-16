import { combineReducers } from 'redux';
import ui from './ui';
import news from './news';
import notifications from './notifications';

const reducers = combineReducers({
  ui,
  news,
  notifications
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined;
  }
  return reducers(state, action);
};

export default rootReducer;
