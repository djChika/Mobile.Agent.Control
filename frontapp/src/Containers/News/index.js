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

const showMessage = type => {
  message[type](MESSAGES[type]);
};
class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetNews: undefined,
      selectedNewsIndex: -1,
      sending: false,
      deleting: false
    };
  }

  selectNews = (news, index) => {
    this.setState({
      targetNews: news,
      selectedNewsIndex: index
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
  addNews = () => {
    this.props.addNewsItem({ ...NEWS_OBJ, title: 'Новая' });
  };

  saveNews = () => {
    this.setState(
      {
        sending: true
      },
      () => {
        this.props
          .sendNews(this.state.targetNews, this.state.selectedNewsIndex)
          .then(res => {
            const { news } = res;
            this.setState(
              {
                sending: false,
                targetNews: news
              },
              () => {
                showMessage('success');
              }
            );
          })
          .catch(() => {
            this.setState(
              {
                sending: false
              },
              () => {
                showMessage('error');
              }
            );
          });
      }
    );
  };

  deleteNews = news => {
    if (!news.id) {
      this.props.deleteNewsItem(news, this.state.selectedNewsIndex);
      this.selectNews(undefined, -1);
      return;
    }
    this.setState(
      {
        deleting: true
      },
      () => {
        this.props
          .deleteNews(news, this.state.selectedNewsIndex)
          .then(() => {
            this.setState(
              {
                deleting: false
              },
              () => {
                showMessage('success');
                this.selectNews(undefined, -1);
              }
            );
          })
          .catch(() => {
            this.setState(
              {
                deleting: false
              },
              () => {
                showMessage('error');
              }
            );
          });
      }
    );
  };

  render() {
    return (
      <Background>
        <Menu
          list={this.props.news.list}
          onSelectNews={this.selectNews}
          selectedNewsIndex={this.state.selectedNewsIndex}
          onAddNews={this.addNews}
        />
        <Form
          sending={this.state.sending}
          deleting={this.state.deleting}
          news={this.state.targetNews}
          onChangeField={this.changeField}
          onSaveNews={this.saveNews}
          onDeleteNews={this.deleteNews}
        />
      </Background>
    );
  }
}

export default News;
