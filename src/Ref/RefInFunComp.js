import React, { useRef } from "react";
import RefFunChild from "./RefFunChild";

const RefInFunComp = () => {
  const inputRef = useRef();
  const inputRef1 = useRef();
  const outRef = useRef();
  const childRef = useRef();

  const handleSubmit = () => {
    outRef.current.innerHTML =
      inputRef.current.value + " " + inputRef1.current.value;
    childRef.current.innerHTML =
      inputRef.current.value + " " + inputRef1.current.value;
  };
  return (
    <>
      <div ref={outRef}></div>
      <br />
      <br />
      <input type="text" ref={inputRef} />
      <br />
      <br />
      <input type="password" ref={inputRef1} />
      <br />
      <br />
      <button onClick={handleSubmit}>login</button>
      <br />
      <br />
      <h1>passing to Child Component</h1>
      <RefFunChild
        data={"ref from parent component or froward Ref"}
        ref={childRef}
      />
    </>
  );
};

export default RefInFunComp;
