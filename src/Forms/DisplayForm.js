import React from "react";
import "../styles.css";
const DisplayForm = (props) => {
  return (
    <>
      <div className="main-form">
        <h1>{props.data}</h1>
        <button
          onClick={() => {
            props.remove(props.id);
          }}
        >
          X
        </button>
      </div>
    </>
  );
};
export default DisplayForm;
