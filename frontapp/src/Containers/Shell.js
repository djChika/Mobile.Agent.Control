import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { LoadingSpinner } from 'Components/SharedComponents/Spinner';
import { BadServer } from 'Components/SharedComponents/Result';

function isReady(targets) {
  let state = global.store.getState();
  return targets.every(target => state.ui[target].isReady === true);
}

function mapStateToProps(stores) {
  return state =>
    Object.assign({}, ...stores.map(store => ({ [store]: state[store] })));
}

function Shell(Component, params) {
  const { fetchData, stores } = params;
  class Shelled extends React.Component {
    state = {
      loading: true,
      isError: false
    };
    componentDidMount() {
      if (!isReady(stores)) {
        fetchData()
          .then(() => {
            this.setState({ loading: false, isError: false });
          })
          .catch(() => {
            this.setState({
              isError: true
            });
          });
      } else {
        this.setState({ loading: false, isError: false });
      }
    }
    render() {
      if (this.state.isError) {
        return <BadServer />;
      }
      if (this.state.loading === true) {
        return <LoadingSpinner />;
      }
      return <Component {...this.props} />;
    }
  }

  return compose(connect(mapStateToProps(stores)))(Shelled);
}

export default Shell;
