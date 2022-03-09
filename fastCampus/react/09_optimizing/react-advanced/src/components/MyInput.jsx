import React, { forwardRef } from "react";

const MyInput = forwardRef((props, ref) => {
  return (
    <div>
      <p>My Input</p>
      <input ref={ref} />
    </div>
  );
});

export default MyInput;
