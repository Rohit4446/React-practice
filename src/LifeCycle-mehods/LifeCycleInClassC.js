import React, { Component } from "react";
import LifeCycleInFunctionalC from "./LifeCycleInFunctionalC";
import EventHandling from "../Event/EventHandling";

class LifeCycleInClassC extends Component {
  constructor(props) {
    super(props);
    //console.log("i am from constructor");
    this.state = {
      time: new Date(),
      day: new Date().getDay(),
      month: new Date().getMonth(),
      year: new Date().getFullYear()
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.Ticking(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("going inside");
  }

  Ticking = () => {
    this.setState({
      time: new Date(),
      day: new Date().getDay(),
      month: new Date().getMonth(),
      year: new Date().getFullYear()
    });
  };

  render() {
    //  console.log("in render");
    return (
      <>
        <h1>
          current Time -:{" "}
          {this.state.day + `/` + this.state.month + `/` + this.state.year +`,`  + this.state.time.toLocaleTimeString()}
        </h1>
        <EventHandling />
        {/*<LifeCycleInFunctionalC />*/}
      </>
    );
  }
}

export default LifeCycleInClassC;
