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
    Object.assign(
      {},
      ...stores.concat(['ui']).map(store => ({ [store]: state[store] }))
    );
  return mapStateToProps;
}

function buildMapDispatchToProps(stores) {
  let mapDispatchToProps = dispatch =>
    bindActionCreators(
      Object.assign(
        {},
        ...stores
          .concat(['ui'])
          .flatMap(store => [actionCreators[store], actions[store]])
      ),
      dispatch
    );
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
      if (!stores || stores.length === 0) {
        this.setState({
          loading: false
        });
        return;
      }

      let actionsToRun = [];
      stores.map(store => {
        if (!this.props.ui[store].isReady) {
          actions[store].init.map(initAction => {
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
          this.props.setReadyStores(stores);
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
