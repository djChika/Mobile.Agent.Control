import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

function Shell(Component, params) {
  const { mapStateToProps } = params;
  class Shelled extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  return compose(connect(mapStateToProps))(Shelled);
}

export default Shell;
