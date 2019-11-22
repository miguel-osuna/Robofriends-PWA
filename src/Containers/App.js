import React, { Fragment, Component } from "react";
import MainPage from "../Components/MainPage/MainPage.js";
import "./App.css";

import { connect } from "react-redux";

// Import actions
import { setSearchField, requestRobots } from "../Actions/actions.js";

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

class App extends Component {
  render() {
    return (
      <Fragment>
        <MainPage {...this.props} />
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
