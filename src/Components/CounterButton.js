import React, { Component } from "react";

class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    if (this.state.count !== nextState.count) {
      return true;
    } else {
      return false;
    }
  }

  updateCounter = () => {
    this.setState(state => {
      return { count: state.count + 1 };
    });
  };

  render() {
    const { count } = this.state;
    const { updateCounter } = this;
    console.log("CounterButton");
    return (
      <button color={this.props} onClick={updateCounter}>
        {" "}
        Count: {count}
      </button>
    );
  }
}

export default CounterButton;
