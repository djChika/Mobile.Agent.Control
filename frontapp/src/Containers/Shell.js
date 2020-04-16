import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

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
      loading: true
    };
    componentDidMount() {
      if (!isReady(stores)) {
        fetchData().then(() => {
          this.setState({ loading: false });
        });
      } else {
        this.setState({ loading: false });
      }
    }
    render() {
      if (this.state.loading === true) {
        return <div>Loading...</div>;
      }
      return <Component {...this.props} />;
    }
  }

  return compose(connect(mapStateToProps(stores)))(Shelled);
}

export default Shell;
