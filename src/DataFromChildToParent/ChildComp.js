import React, { useState } from "react";

const ChildComp = (props) => {
  const [data, setData] = useState();

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <button onClick={props.showName(data)}>Show Name</button>
    </>
  );
};

export default ChildComp;
