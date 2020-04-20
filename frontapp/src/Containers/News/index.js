import { message } from 'antd';
import Background from 'Containers/Background';
import React from 'react';
import { Flex, Box } from 'UIKit/grid';
import { Form, Menu } from './lib';

const NEWS_OBJ = {
  title: undefined,
  shortText: undefined,
  description: undefined,
  link: undefined
};

const MESSAGES = {
  success: 'Изменения сохранены!',
  error: 'Произошла ошибка! Изменения не сохранены.'
};

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetNews: {},
      sending: false
    };
  }

  selectNews = news => {
    this.setState({
      targetNews: news
    });
  };

  changeField = (field, value) => {
    this.setState(prevState => ({
      targetNews: {
        ...prevState.targetNews,
        [field]: value
      }
    }));
  };

  _showMessage = type => {
    setTimeout(() => {
      this.setState(
        {
          sending: false
        },
        () => {
          message[type](MESSAGES[type]);
        }
      );
    }, 1500);
  };

  sendNews = () => {
    this.setState(
      {
        sending: true
      },
      () => {
        this.props
          .sendNews(this.state.targetNews)
          .then(() => {
            this._showMessage('success');
          })
          .catch(() => {
            this._showMessage('error');
          });
      }
    );
  };

  createNews = () => {
    this.props.addNews({ ...NEWS_OBJ, title: 'Новая' });
  };

  deleteNews = news => {
    this.props.deleteNews(news);
  };

  render() {
    return (
      <Background>
        <Menu
          list={this.props.news.list}
          onSelectNews={this.selectNews}
          onCreateNews={this.createNews}
        />
        <Form
          sending={this.state.sending}
          news={this.state.targetNews}
          onChangeField={this.changeField}
          onSendNews={this.sendNews}
          onDeleteNews={this.deleteNews}
        />
      </Background>
    );
  }
}

export default News;
