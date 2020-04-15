import { NoMatch } from 'Components/Router';

const paths = [
  {
    name: 'Главная',
    route: '/main',
    content: undefined
  },
  {
    name: 'Новости',
    route: '/news',
    content: undefined
  },
  {
    name: 404,
    route: undefined,
    content: NoMatch
  }
];

export default paths;
