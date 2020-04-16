import React from 'react';
import { Result } from 'antd';

export const NotFound = () => (
  <Result status="404" title="404" subTitle="Page Not Found" />
);

export const BadServer = () => (
  <Result status="500" title="500" subTitle="Sorry, the server is wrong." />
);
