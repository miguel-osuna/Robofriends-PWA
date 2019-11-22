import React, { Fragment, Component } from "react";
import Header from "../Header/Header.js";
import CardList from "../CardList/CardList.js";
import SearchBox from "../SeachBox/SearchBox.js";
import Scroll from "../Scroll/Scroll.js";
import CounterButton from "../CounterButton/CounterButton.js";
import "./MainPage.css";

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    return this.props.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.props.searchField.toLowerCase());
    });
  };

  render() {
    const { color, onSearchChange, isPending } = this.props;
    const { filterRobots } = this;

    // Changes the CardList of Robots Searched
    return isPending ? (
      <div>
        <h1 className="tc"> Loading, please wait</h1>
      </div>
    ) : (
      <Fragment>
        <div className="tc">
          <Header />
          <CounterButton color={color} />
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <CardList robots={filterRobots()} />
          </Scroll>
        </div>
      </Fragment>
    );
  }
}

export default MainPage;
