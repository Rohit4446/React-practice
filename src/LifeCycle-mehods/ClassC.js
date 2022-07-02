import React, { Component } from "react";

class ClassC extends Component {
  constructor(props) {
    super(props);
    console.log("in constructor ");
    this.state = {
      counter: 0
    };
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
