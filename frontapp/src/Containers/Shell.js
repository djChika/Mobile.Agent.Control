import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { LoadingSpinner } from 'Components/SharedComponents/Spinner';
import { BadServer } from 'Components/SharedComponents/Result';
import fetch from 'common/fetch';
import { setReady } from 'store/actions/ui';

function isReady(targets) {
  let state = global.store.getState();
  return targets.every(target => state.ui[target].isReady);
}

function mapStateToProps(stores) {
  return state =>
    Object.assign({}, ...stores.map(store => ({ [store]: state[store] })));
}

function fetchData(stores) {
  let state = global.store.getState();
  return new Promise((resolve, reject) => {
    stores.map(store => {
      if (!state.ui[store].isReady) {
        Promise.all(fetch[store])
          .then(() => {
            setReady(store);
            resolve();
          })
          .catch(err => {
            reject(err);
          });
      }
    });
  });
}

function Shell(Component, params) {
  const { stores } = params;
  class Shelled extends React.Component {
    state = {
      loading: true,
      isError: false
    };

    componentDidMount() {
      if (!isReady(stores)) {
        fetchData(stores)
          .then(() => {
            this.setState({
              loading: false
            });
          })
          .catch(() => {
            this.setState({ isError: true, loading: false });
          });
      } else {
        this.setState({
          loading: false
        });
      }
    }
    render() {
      if (this.state.loading) {
        return <LoadingSpinner />;
      }
      if (this.state.isError) {
        return <BadServer />;
      }
      return <Component {...this.props} />;
    }
  }

  return compose(connect(mapStateToProps(stores)))(Shelled);
}

export default Shell;
