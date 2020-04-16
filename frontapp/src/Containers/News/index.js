import { Layout } from 'antd';
import { Menu, Form } from './lib';
import Background from 'Containers/Background';
import React from 'react';
import { Flex } from 'UIKit/grid';
import { sendNews } from 'store/actions/news';

const { Content } = Layout;

const modes = {
  add: 'add',
  edit: 'edit'
};

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNews: 0,
      targetNews: {},
      mode: undefined
    };
  }

  selectNews = newsId => {
    this.setState({
      selectedNews: newsId
    });
  };

  _onChangeField = (field, value) => {
    this.setState(prevState => ({
      targetNews: {
        ...prevState.targetNews,
        [field]: value
      }
    }));
  };

  onSendNews = () => {
    sendNews(this.state.targetNews);
  };

  render() {
    return (
      <Background>
        <Menu list={this.props.news.list} onSelectNews={this.selectNews} />
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <Flex justifyContent="center">
            <Form
              onChangeField={this._onChangeField}
              sendNews={this.onSendNews}
            />
          </Flex>
        </Content>
      </Background>
    );
  }
}

export default News;
