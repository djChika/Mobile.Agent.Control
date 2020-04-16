import React from 'react';
import { Spin } from 'antd';
import { Flex } from 'UIKit/grid';

export const LoadingSpinner = () => {
  return (
    <Flex justifyContent="center">
      <Spin tip="Loading..." />
    </Flex>
  );
};
