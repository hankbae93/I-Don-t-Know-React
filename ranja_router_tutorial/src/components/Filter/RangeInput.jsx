import React from "react";

const RangeInput = ({ value, onChange }) => {
  return (
    <div>
      <h3>판매가</h3>
      <input
        type='range'
        min={0}
        max={100000}
        step={100}
        value={value}
        onChange={onChange}
      />
      {value}
    </div>
  );
};

export default RangeInput;
