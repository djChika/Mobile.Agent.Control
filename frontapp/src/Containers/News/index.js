import { Layout } from 'antd';
import Menu from 'Components/Menu';
import React from 'react';
const { Content } = Layout;

class News extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Menu list={this.props.news.list} />
        <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
      </>
    );
  }
}

export default News;
