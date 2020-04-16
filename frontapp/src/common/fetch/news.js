import { getNews } from 'store/actions/news';
import { setReady } from 'store/actions/ui';

export default function fetchNewsData() {
  return getNews().then(() => {
    setReady('news');
  });
}
