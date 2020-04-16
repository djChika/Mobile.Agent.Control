import { screens } from './mq';

const ALLOWED_BREAKPOINTS = [
  'tablet',
  'desktop',
  'desktop1280',
  'desktop1440',
  'desktop1680'
];

export default {
  breakpoints: ALLOWED_BREAKPOINTS.map(breakpoint => screens[breakpoint] + 'px')
};
