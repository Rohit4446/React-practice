import React, { Component, createRef } from "react";
import RefInFunComp from "./RefInFunComp";

class RefForm extends Component {
  constructor(props) {
    super(props);
    this.inputRef1 = createRef();
    this.inputRef2 = createRef();
    this.outRef1 = createRef();
    // this.ref2 = React.createRef(); using without importing
  }

  handleSubmit = () => {
    console.log("working");
    console.log(this.inputRef1.current.value);
    console.log(this.inputRef1.current.value);
    this.outRef1.current.innerHTML =
      this.inputRef1.current.value + " " + this.inputRef1.current.value;
  };

  render() {
    return (
      <>
        <h1> Ref in Class Component</h1>
        <div ref={this.outRef1}>{}</div>
        <br />
        <br />
        <input type="text" ref={this.inputRef1} />
        <br />
        <br />
        <input type="password" ref={this.inputRef1} />
        <br />
        <br />
        <button onClick={this.handleSubmit}>login</button>
        <br />
        <br />
        <br />

        <h1>Ref in Functional Component</h1>
        <RefInFunComp />
      </>
    );
  }
}

export default RefForm;
