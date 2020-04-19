import { BadServer } from 'Components/SharedComponents/Result';
import { LoadingSpinner } from 'Components/SharedComponents/Spinner';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import actionCreators from 'store/actionCreators';
import actions from 'store/actions';

function buildMapStateToProps(stores) {
  let mapStateToProps = state =>
    Object.assign({}, ...stores.map(store => ({ [store]: state[store] })));
  return mapStateToProps;
}

function buildMapDispatchToProps(stores) {
  let mapDispatchToProps = dispatch =>
    bindActionCreators(
      Object.assign({}, ...stores.map(store => actionCreators[store])),
      dispatch
    );
  return mapDispatchToProps;
}

function fetchData(stores) {
  let state = global.store.getState();

  let actionsToRun = [];
  stores.map(store => {
    if (!state.ui[store].isReady) {
      actionsToRun.push(...actions[store]);
    }
  });

  return new Promise((resolve, reject) => {
    Promise.all(actionsToRun)
      .then(() => {
        resolve();
      })
      .catch(err => {
        reject(err);
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
      fetchData(stores)
        .then(() => {
          this.setState({
            loading: false
          });
        })
        .catch(() => {
          this.setState({ isError: true, loading: false });
        });
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

  return compose(
    connect(buildMapStateToProps(stores), buildMapDispatchToProps(stores))
  )(Shelled);
}

export default Shell;
