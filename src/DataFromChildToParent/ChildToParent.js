import React, { useState } from "react";
import ChildComp from "./ChildComp";
const ChildToParent = () => {
  const [name, updateName] = useState("Enter your Name");
  const show = (data) => {
    updateName(data);
  };

  return (
    <>
      <ChildComp showName={show} />
      <h1>{name}</h1>
    </>
  );
};

export default ChildToParent;
