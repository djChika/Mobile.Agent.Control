import { createEnumProxy } from 'tools';

const mapStateToProps = createEnumProxy({
  News: state => ({
    news: state.news
  })
});

export default mapStateToProps;
