import React from "react";

const Child = (props) => {
  const { greet } = props;
  return (
    <>
      <button
        onClick={() => {
          greet("child");
        }}
      >
        Greet Parent
      </button>
    </>
  );
};
export default Child;
