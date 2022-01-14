import React, { useEffect, useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((prev) => prev + 1);
  useEffect(() => {
    console.log("componentDidMout", count);
  }, []);
  useEffect(() => {
    console.log("ComponentDidUpdate", count);
  });
  useEffect(() => {
    console.log("ComponentDidUpdate dependency count", count);

    return () => {
      // cleanUp, 이렇게 쓰면 저 count가 업데이트 되기전에 실행하는 함수다.
      console.log("clean Up by Count", count);
    };
  }, [count]);
  /*
    clean Up by Count 1
    ComponentDidUpdate 2
    ComponentDidUpdate dependency count 2
  */

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleClick}>클릭</button>
    </div>
  );
};

export default Example;
