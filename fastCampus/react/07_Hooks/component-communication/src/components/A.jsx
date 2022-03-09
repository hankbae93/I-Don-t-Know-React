import React, { useState, createContext } from "react";
import E from "./E";

const A = () => {
  const [value, setValue] = useState("아직 안바뀜");
  return (
    <div>
      <p>
        A 구역
        <button onClick={() => setValue("E Update")}>E의 값을 바꾸기</button>
      </p>

      <B />
    </div>
  );
};

export default A;

function B() {
  return (
    <div>
      <button>B 구역</button>
      <C />
    </div>
  );
}
function C() {
  return (
    <div>
      <button>C 구역</button>
      <D />
    </div>
  );
}
function D() {
  return (
    <div>
      <button>D 구역</button>
      <E />
    </div>
  );
}
