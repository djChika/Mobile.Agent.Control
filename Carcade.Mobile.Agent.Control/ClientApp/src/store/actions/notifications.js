import axios from 'axios';
import { setSubscribersList } from '../actionCreators/notifications';

export const getSubscribers = () => dispatch =>
  new Promise((resolve, reject) => {
    axios
      .get('api/notifications/getSubscribers')
      .then(res => {
        const { subscribersList } = res.data;
        dispatch(setSubscribersList({ subscribersList }));
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });

export const sendNotification = ({ agentIds, title, body, data }) => dispatch =>
  new Promise((resolve, reject) => {
    axios
      .post('api/notifications/sendNotification', {
        agentIds,
        title,
        body,
        data
      })
      .then(res => {
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });
