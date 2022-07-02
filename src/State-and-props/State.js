import React, { useState } from "react";
import Props from "./Props";

const State = () => {
  const [name, setName] = useState("rohit");

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <Props name={name} />
    </>
  );
};

export default State;
