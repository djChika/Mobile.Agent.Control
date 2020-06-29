import { BadServer } from 'Components/SharedComponents/Result';
import { LoadingSpinner } from 'Components/SharedComponents/Spinner';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import actionCreators from 'store/actionCreators';
import actions from 'store/actions';

function buildMapStateToProps(stores) {
  let mapStateToProps = state => ({
    stores: Object.assign(
      {},
      ...stores
        .concat(['ui'])
        .map(store => ({ [store]: state[store] })),
    ),
  });

  return mapStateToProps;
}

function buildMapDispatchToProps(stores) {
  let mapDispatchToProps = dispatch => ({
    actions: Object.assign(
      {},
      ...stores.concat(['ui']).map(store => ({
        [store]: bindActionCreators(
          { ...actions[store], ...actionCreators[store] },
          dispatch,
        ),
      })),
    ),
  });
  return mapDispatchToProps;
}

function Shell(Component, params) {
  const { stores } = params;
  class Shelled extends React.Component {
    state = {
      loading: true,
      isError: false
    };

    fetchData() {
      let actionsToRun = [];
      for (let store of stores) {
        if (!this.props.stores.ui[store].isReady) {
          for (let initAction of actions[store].init) {
            let action = this.props.actions[store][initAction];
            if (action) {
              actionsToRun.push(action());
            }
          }
        }
      }
      Promise.all(actionsToRun)
        .then(() => {
          this.setState({
            loading: false
          });
          const { setReadyStores } = this.props.actions.ui;
          setReadyStores(stores);
        })
        .catch(err => {
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
