import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      massage: "hello"
    };
  }

  clickHandler = () => {
    this.setState({
      massage: "goodbuy"
    });
  };

  notify = () => toast.error("Wow so easy!");

  render() {
    return (
      <>
        <div>{this.state.massage}</div>
        <button onClick={this.notify}>Notify!</button>
        <ToastContainer />
        <button onClick={this.clickHandler}>Click</button>
      </>
    );
  }
}

export default EventBind;
