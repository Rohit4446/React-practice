import React, { useReducer } from "react";
import Hook from "./hook";

const HookReducer = () => {
  const count = {
    counter: 0
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENTBYONE":
        return {
          count: state.counter + 1
        };
      default:
        return "ok";
    }
  };

  const [state, dispatch] = useReducer(reducer, count);

  return (
    <>
      <button onClick={() => dispatch({ type: "INCREMENTBYONE" })}>
        increment
      </button>
      <br /> <br />
      <div>counter - {state.counter}</div>
      <br /> <br />
      <div>----------------------------</div>
      <br /> <br />
      <Hook />
    </>
  );
};

export default HookReducer;
