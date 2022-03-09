import React, { useState, createRef, useRef } from "react";

const Example4 = () => {
  const [value, setValue] = useState("");
  // 렌더링 사이에 사용됨
  const input1Ref = createRef(); // 렌더될때마다 새로 만들어져서 넣어주는 것
  const input2Ref = useRef(); // 첫 마운트때 생성하고 이어짐

  console.log(input1Ref.current);
  console.log(input2Ref.current);

  const change = (e) => setValue(e.target.value);

  return (
    <div>
      <input value={value} onChange={change} />
      <input ref={input1Ref} />
      <input ref={input2Ref} />
    </div>
  );
};

export default Example4;
