import { Layout } from 'antd';
import { Header, Content } from './lib';
import React from 'react';

class PageLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Header />
        <Content />
      </Layout>
    );
  }
}

export default PageLayout;
