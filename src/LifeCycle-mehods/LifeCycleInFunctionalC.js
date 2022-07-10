import React, { useEffect, useState } from "react";

const LifeCycleInFunctionalC = () => {
  const [state, setState] = useState(0);
  useEffect(() => {
    console.log("ok");
  });

  return (
    <>
      <button
        onClick={(e) => {
          setState(state + 1);
        }}
      >
        click me
      </button>
      {state}
    </>
  );
};

export default LifeCycleInFunctionalC;
