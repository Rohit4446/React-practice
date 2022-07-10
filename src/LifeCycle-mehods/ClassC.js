import React, { Component } from "react";

class ClassC extends Component {
  // get called at the first
  constructor(props) {
    super(props);
    console.log("in constructor ");
    this.state = {
      counter: 0
    };
  }
  shouldComponentUpdate() {
    if (this.state.counter >= 5) {
      return false;
    }
    return true;
  }

  componentDidMount() {
    console.log("component Mounting");
  }
  componentDidUpdate() {
    console.log("updating");
  }

  componentWillUnmount() {
    console.log("unmounting");
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  // render is used represrnt the html after excutation
  // onready
  // onupdate of prop or state
  render() {
    console.log("render ");
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increment}>increment</button>
      </>
    );
  }
}

export default ClassC;
