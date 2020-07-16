import React from 'react';
import { Flex } from 'UIKit/grid';

const Background = props => {
  return (
    <Flex
      {...props}
      style={{
        // padding: '24px 0',
        background: '#fff',
        ...props.style
      }}
    />
  );
};

export default Background;
