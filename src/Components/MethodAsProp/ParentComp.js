import React, { Component } from "react";
import Child from "./Child";

class ParentComp extends Component {
  constructor() {
    super();

    this.state = {
      ParentName: "Parent"
    };

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName) {
    alert(`Hello ${this.state.ParentName} from ${childName}`);
  }

  render() {
    return (
      <>
        <Child greet={this.greetParent} />
      </>
    );
  }
}
export default ParentComp;
