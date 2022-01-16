# useCallback, memo, key

1. useCallback

```jsx
// useCallback을 활용해 함수를 재선언하지 않게 한다.
// key를 명시해줘도 함수를 매번 재선언하면 props가 변경됐다고 리액트가 리렌더링하게 된다.
const toPersonClick = useCallback(() => {}, []);

return (
  <div>
    <input type='text' value={state.text} onChange={_change} />
    <ul>
      {persons.map((person) => {
        return <Person {...person} key={person.id} onClick={toPersonClick} />;
      })}
    </ul>
  </div>
);
```

2. memo

클래스형에서는 pureComponent, 함수형에서는 memo를 통해 props가 변경되지않으면 리렌더링하지 않게 할 수 있다.

```jsx
const Person = memo(({ name, age }) => {
  console.log("person render");
  return (
    <p>
      {name} - {age}
    </p>
  );
});
```

# Portals

모달이나 팝업 같은 UI를 구현하다 보면 z-index stacking 문제로 골머리를 썩을 때가 있다.

React.createPortals는 root에서 만든 로직의 함수들을 마치 포탈처럼 내가 원하는 돔으로 전달하고

UI 작업을 하게 도와준다.

1. 일단 index.html에 돔 하나를 작성해준다.

```html
<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
  <div id="modal"></div>
</body>
```

2. Modal.jsx

```jsx
import ReactDOM from "react-dom";

const Modal = ({ children }) =>
  ReactDOM.createPortal(children, document.querySelector("#modal"));

export default Modal;
```

3. 이제 우리가 작성한 모달 컴포넌트는 root 돔이 아닌 modal 돔에서 렌더되는 것을 확인할 수 있다.

```jsx
function App() {
  const [visible, setVisible] = useState(false);
  const open = () => {
    setVisible(true);
  };

  const close = () => {
    setVisible(false);
  };

  return (
    <div>
      <button onClick={open}>Open</button>
      {visible && (
        <Modal>
          <div
            style={{
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.5)",
            }}
            onClick={close}
          >
            HELLLO
          </div>
        </Modal>
      )}
    </div>
  );
}

export default App;
```

# forwardRef

상위 컴포넌트에서 하위 컴포넌트에 ref를 props로 전달하고 싶을때 사용한다.

```jsx
function App() {
  const myInputRef = useRef();

  const click = () => {
    console.log(myInputRef.current.value);
  };

  return (
    <div>
      <MyInput ref={myInputRef} />
      <button onClick={click}>send</button>
    </div>
  );
}

export default App;
```

```jsx
import React, { forwardRef } from "react";

const MyInput = forwardRef((props, ref) => {
  return (
    <div>
      <p>My Input</p>
      <input ref={ref} />
    </div>
  );
});

export default MyInput;
```
