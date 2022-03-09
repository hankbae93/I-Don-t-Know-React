import React, { useState, useMemo, useCallback } from "react";

function sum(persons) {
  console.log("sum...");
  return persons.map((person) => person.age).reduce((l, r) => l + r);
}

const Example3 = () => {
  const [value, setValue] = useState("");
  const [persons] = useState([
    { name: "ranja", age: 39 },
    { name: "IRDD", age: 39 },
  ]);

  const count = useMemo(() => sum(persons), [persons]);

  const change = (e) => setValue(e.target.value);

  const click = useCallback(() => {
    // 함수생성을 반복하지않게 해주는 것 참조해야할 변수가 바뀌는 구조라면 인자에 넣어야될 것이다
    console.log(value);
  }, []);

  return (
    <div>
      <input value={value} onChange={change} />
      <p>{count}</p>
      <button onClick={click}>클릭</button>
    </div>
  );
};

export default Example3;
