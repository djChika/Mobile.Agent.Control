import { addNewsItem, deleteNewsItem } from './news';
import { setReadyStores } from './ui';

export default {
  news: { addNewsItem, deleteNewsItem },
  ui: { setReadyStores }
};
