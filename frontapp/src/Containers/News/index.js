import { Layout } from 'antd';
import { Menu } from './lib';
import Background from 'Containers/Background';
import React from 'react';

const { Content } = Layout;

class News extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Background>
        <Menu list={this.props.news.list} />
        <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
      </Background>
    );
  }
}

export default News;
