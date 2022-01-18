import React, { memo } from "react";

const CheckBoxInputs = ({ list, handleClick, checks }) => {
  return (
    <>
      <div>
        <h3>작가</h3>
        {list.map((item, i) => {
          return (
            <div onClick={() => handleClick(i)}>
              <label htmlFor={`check${i}`}>
                <input
                  type='checkbox'
                  name
                  id={`check${i}`}
                  checked={checks[i]}
                />
                <span>{item}</span>
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CheckBoxInputs;
