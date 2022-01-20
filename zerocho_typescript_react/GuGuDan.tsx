import * as React from "react";
import { useState, useRef } from "react";

const GuGuDan = () => {
  const [first, setFirst] = useState(getRandom());
  const [second, setSecond] = useState(getRandom());
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputEl = useRef<HTMLInputElement>(null);

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputEl.current;
    if (parseInt(value) === first * second) {
      setResult("정답");
      setFirst(getRandom());
      setSecond(getRandom());
      setValue("");
      input?.focus();
    } else {
      setResult("땡");
      setValue("");
      input?.focus();
    }
  };

  return (
    <>
      <div>
        {first} 곱하기 {second}는?
      </div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputEl}
          type='number'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      <p>
        <strong>{result}</strong>
      </p>
    </>
  );

  function getRandom(): number {
    return Math.ceil(Math.random() * 9);
  }
};

export default GuGuDan;
