import initialState from '../initialState';
import { SET_SUBSCRIBERS } from '../types';

export default function (state = initialState.notifications, action) {
  switch (action.type) {
    case SET_SUBSCRIBERS: {
      const { subscribersList } = action.state;
      return {
        ...state,
        subscribersList
      };
    }
    default: {
      return state;
    }
  }
}
