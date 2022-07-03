import React, { forwardRef } from "react";

const RefFunChild = (props, ref) => {
  return (
    <>
      <div ref={ref}>{props.data}</div>
    </>
  );
};

export default forwardRef(RefFunChild);
