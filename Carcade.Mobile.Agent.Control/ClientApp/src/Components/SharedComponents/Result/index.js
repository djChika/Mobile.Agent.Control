import React from 'react';
import { Result } from 'antd';

export const NotFound = () => (
  <Result status="404" title="404" subTitle="Page Not Found" />
);

export const BadServer = () => (
  <Result status="500" title="Упс" subTitle="Что-то сломалось..." />
);
