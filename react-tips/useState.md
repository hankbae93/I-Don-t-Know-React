# useState 동기적으로 쓰는방법

## 1. useState의 특징

    1. 기본적으로 비동기로 동작함
    2. useState를 연속적으로 호출할 때 리액트 내부에서 batch 처리
    3. state 객체 뿐만 아니라 새로운 state객체 생성하는 함수도 넣어줄 수 있다.

## 2. useState를 연속적으로 호출할 때의 상황

```jsx
import React, { useState } from "react";

function Counter() {
  const [num, setNum] = useState(1);

  const add = () => setNum(num + 1);
  const subtract = () => setNum(num - 1);
  const multyplyBy2 = () => setNum(num + 2);
  const multyplyBy2AndAddBy1 = () => {
    multyplyBy2();
    add();
  };
  return (
    <>
      <h1>Number : {num}</h1> // 현재 1
      <div>
        <button onClick={add}>+ 1</button> // 실행 시 num = 2
        <button onClick={subtract}>- 1</button> // 실행 시 num = 0
        <button onClick={multyplyBy2}>* 2</button> // 실행시 num = 2
        ===========================================================
        <button onClick={multyplyBy2AndAddBy1}>* 2 + 1</button>
        // 실행 시 1 * 2 + 1 = 4 라는 결과예상 // 실행 결과 num = 2 ??????
      </div>
    </>
  );
}
```

- 리액트는 setState가 연속으로 호출될때 일일이 렌더링을 하는 것이 아니라
  한번에 mergin 작업을 한 다음 기존 state tree와 비교를 시작한다

## 3. merging ?

```jsx
// 위 코드에서 벌어진 상황을 보자면
<button onClick={multyplyBy2AndAddBy1}>* 2 + 1</button>

multyplyBy2AndAddBy1 실행

const currentState = {
    number: 1
}

const newState = Object.assign(
    currentState,
    { number: number * 2 }, // multyplyBy2가 리턴한 state 객체
    { number: number + 1 } // add가 리턴한 state 객체
)
여기서 같은 키의 값이 덮어씌워지면서 number: number + 1의 값만 남게 된 것이다.
==> setNumber(newState)

```

## 4. 연속적으로 호출했을 때의 방법

```jsx
import React, { useState } from "react";

function Counter() {
  const [num, setNum] = useState(1);

  const add = () => setNum((num) => num + 1);
  const subtract = () => setNum((num) => num - 1);
  const multyplyBy2 = () => setNum((num) => num + 2);
  const multyplyBy2AndAddBy1 = () => {
    multyplyBy2();
    add();
  };
  return (
    <>
      <h1>Number : {num}</h1> // 현재 1
      <div>
        <button onClick={add}>+ 1</button> // 실행 시 num = 2
        <button onClick={subtract}>- 1</button> // 실행 시 num = 0
        <button onClick={multyplyBy2}>* 2</button> // 실행시 num = 2
        ===========================================================
        <button onClick={multyplyBy2AndAddBy1}>* 2 + 1</button>
        // 실행 시 1 * 2 + 1 = 4 라는 결과예상 // 실행 결과 num = 4 (●'◡'●)
      </div>
    </>
  );
}
```

- state 객체가 아니라 함수를 인자로 받을 때는 리액트에서 Queue에 넣고 순서대로 연산한다
- 첫번째 함수를 연산하고 리턴한 state를 바로 다음 함수 인자로 넘겨준다
- setState는 여전히 비동기지만 결과값은 동기적으로 처리된 것처럼 만들 수 잇다

https://www.youtube.com/watch?v=hSdVDBPTT0U
