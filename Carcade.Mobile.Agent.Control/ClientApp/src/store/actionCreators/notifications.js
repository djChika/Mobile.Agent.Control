import { SET_SUBSCRIBERS } from '../types';

export const setSubscribersList = ({ subscribersList }) => ({
  type: SET_SUBSCRIBERS,
  state: {
    subscribersList
  }
});
