import React from "react";

const DateInput = ({ value, onChange }) => {
  return (
    <div>
      <h3>출간일</h3>
      <input type='date' value={value} onChange={onChange} />
    </div>
  );
};

export default DateInput;
