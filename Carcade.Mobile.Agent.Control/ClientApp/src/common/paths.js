import Main from 'Containers/Main';
import News from 'Containers/News';
import Shell from 'Containers/Shell';
import { NotFound } from 'Components/SharedComponents/Result';

const paths = [
  {
    id: 'Main',
    name: 'Главная',
    route: '/',
    content: Main,
    exact: true,
  },
  {
    id: 'News',
    name: 'Новости',
    route: '/news',
    content: Shell(News, {
      stores: ['news'],
    }),
    exact: true,
  },
  {
    name: 404,
    route: undefined,
    content: NotFound,
    exact: true,
  },
];

export default paths;
