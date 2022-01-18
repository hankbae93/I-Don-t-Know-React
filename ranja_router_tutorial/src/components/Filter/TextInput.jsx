import React from "react";

const TextInput = ({ value, onChange }) => {
  return (
    <div>
      <h3>검색어</h3>
      <input
        type='text'
        placeholder='검색어를 입력해주세요'
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
