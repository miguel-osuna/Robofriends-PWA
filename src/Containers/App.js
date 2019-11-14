import React, { Fragment, Component } from "react";
import Header from "../Components/Header.js";
import CardList from "../Components/CardList.js";
import SearchBox from "../Components/SearchBox.js";
import Scroll from "../Components/Scroll.js";
import CounterButton from "../Components/CounterButton.js";
import "./App.css";

import { connect } from "react-redux";

// Import actions
import { setSearchField, requestRobots } from "../Actions/actions.js";

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    is_pending: state.requestRobots.is_pending,
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
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    // This state comes from store.js (redux)
    const { searchField, onSearchChange, robots, is_pending } = this.props;

    const filtered_robots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    // Changes the CardList of Robots Searched
    return is_pending ? (
      <div>
        <h1 className="tc"> Loading, please wait</h1>
      </div>
    ) : (
      <Fragment>
        <div className="tc">
          <Header />
          <CounterButton color={"red"} />
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <CardList robots={filtered_robots} />
          </Scroll>
        </div>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
