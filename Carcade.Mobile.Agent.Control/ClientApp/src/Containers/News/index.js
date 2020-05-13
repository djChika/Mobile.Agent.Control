import { message } from 'antd';
import Background from 'Containers/Background';
import React from 'react';
import { Form, Menu } from './lib';

const NEWS_OBJ = {
  title: undefined,
  shortText: undefined,
  description: undefined,
  link: undefined,
  pictures: [],
  picturesIds: []
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

  addNews = () => {
    this.props.addNewsItem({ ...NEWS_OBJ, title: 'Новая' });
  };

  changeField = (field, value) => {
    this.setState(prevState => ({
      targetNews: {
        ...prevState.targetNews,
        [field]: value
      }
    }));
  };

  changeFilter = (name, value) => {
    this.setState(prevState => ({
      targetNews: {
        ...prevState.targetNews,
        filters: {
          ...prevState.targetNews.filters,
          [name]: value
        }
      }
    }));
  };

  addFile = file => {
    this.setState(prevState => {
      if (
        // !prevState.targetNews.pictures.find(x => x.name) &&
        file.status === 'done'
      )
        return {
          targetNews: {
            ...prevState.targetNews,
            pictures: [...prevState.targetNews.pictures, file],
            picturesIds: [
              ...prevState.targetNews.picturesIds,
              file.response.pictureId
            ]
          }
        };
    });
  };

  removeFile = file => {
    this.setState(prevState => {
      let targetNews = prevState.targetNews;
      const i = targetNews.pictures.indexOf(file);
      targetNews.pictures.splice(i, 1);
      targetNews.picturesIds.splice(i, 1);

      return {
        targetNews
      };
    });
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
              prevState => ({
                sending: false,
                targetNews: {
                  ...prevState.targetNews,
                  id: news.id
                }
              }),
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
          filters={this.props.news.filters}
          onAddFile={this.addFile}
          onRemoveFile={this.removeFile}
          onChangeField={this.changeField}
          onChangeFilter={this.changeFilter}
          onSaveNews={this.saveNews}
          onDeleteNews={this.deleteNews}
        />
      </Background>
    );
  }
}

export default News;
