import { setReadyStores } from './ui';
import { addNewsItem, deleteNewsItem } from './news';
import { setSubscribersList } from './notifications';

export default {
  ui: { setReadyStores },
  news: { addNewsItem, deleteNewsItem },
  notifications: { setSubscribersList }
};
