import { screens } from './mq';

const ALLOWED_BREAKPOINTS = [
//'less'
  'tablet',
  'desktop',
  'desktop1920',
  'desktop2560'
];

export default {
  breakpoints: ALLOWED_BREAKPOINTS.map(breakpoint => screens[breakpoint] + 'px')
};
