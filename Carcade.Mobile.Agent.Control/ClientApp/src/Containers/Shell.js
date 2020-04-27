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
      Object.assign(
        {},
        ...stores.flatMap(store => [actionCreators[store], actions[store]])
      ),
      dispatch
    );
  return mapDispatchToProps;
}

function Shell(Component, params) {
  const { stores, init } = params;
  class Shelled extends React.Component {
    state = {
      loading: true,
      isError: false
    };

    fetchData() {
      if (!stores || !init || stores.length === 0 || init.length === 0) {
        this.setState({
          loading: false
        });
        return;
      }

      let state = global.store.getState();
      let actionsToRun = [];
      stores.map((store, index) => {
        if (!state.ui[store].isReady) {
          let initActions = init[index];
          initActions.map(initAction => {
            if (this.props[initAction]) {
              actionsToRun.push(this.props[initAction]());
            }
          });
        }
      });

      Promise.all(actionsToRun)
        .then(() => {
          this.setState({
            loading: false
          });
        })
        .catch(() => {
          this.setState({ isError: true, loading: false });
        });
    }

    componentDidMount() {
      this.fetchData();
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
