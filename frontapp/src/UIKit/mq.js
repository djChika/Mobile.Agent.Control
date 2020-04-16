import { css } from 'styled-components';

export const screens = {
  small: 320,
  mobile: 480,
  tablet640: 640,
  tablet: 768,
  desktop900: 900,
  desktop: 1024,
  desktop1280: 1280,
  desktop1366: 1366,
  desktop1440: 1440,
  desktop1680: 1680,
  desktop1920: 1920,
  desktop2560: 2560
};

export const query = Object.keys(screens).reduce((acc, label) => {
  acc[label] = `(min-width: ${screens[label] / 16}em)`;
  return acc;
}, {});

const mq = Object.keys(screens).reduce((acc, label) => {
  acc[label] = (...args) =>
    css`
      @media ${query[label]} {
        ${css(...args)};
      }
    `;

  return acc;
}, {});

export default mq;
