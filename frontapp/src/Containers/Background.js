import { Layout } from 'antd';
import React from 'react';

const Background = ({ children }) => {
  return (
    <Layout
      style={{
        padding: '24px 0',
        background: '#fff'
      }}
    >
      {children}
    </Layout>
  );
};

export default Background;
