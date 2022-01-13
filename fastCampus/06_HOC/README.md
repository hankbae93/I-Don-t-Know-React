# Higher-Order Components

```jsx
const HOC = (WrappedComponent) => <WrappedComponent {...newProps} />;
```

    A higher-order component (HOC) is an advanced technique in React for reusing component logic.
    HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.
    Concretely, a higher-order component is a function that takes a component and returns a new component.

    HOC는 리액트에서 컴포넌트 로직 재사용을 위해 사용하는 고급 기술입니다.
    HOC는 React API의 일부가 아니며, 단지 리액트의 집합 특성에서 나온 패턴입니다.
    정확히 말해, HOC는 어떤 컴포넌트를 사용해 새로운 컴포넌트를 리턴하는 함수입니다.

1. 기본 예시

- withPersonData.js

```jsx
/* 기본적으로 네이밍은 with를 붙인다. */
import { useState } from "react";

const withPersonData = (WrappedComponent) => {
  // 여기서 컴포넌트를 선언하는 것은 편법이다. 리액트에서 콜백에 useState같은 훅스를 사용할 수 없기 때문에 새로 선언해서 리턴해준다.
  const Component = (props) => {
    const [data, setData] = useState([
      {
        name: "RANJA",
        age: 30,
      },
    ]);

    const [message, setMessage] = useState("");
    const handleMessage = (e) => setMessage(e.target.value);
    // 중복 로직, 중복 API 요청, 로그인 인증 등등 잦은 로직을 Container화 가능하다.

    const combinedProps = {
      ...props,
      data,
      setData,
    };
    return <WrappedComponent {...combinedProps} />;
  };

  return Component;
};

export default withPersonData;
```

- App.js

```jsx
import withPersonData from "./withPersonData";

function App({ data, setData, message, handleMessage }) {
  return (
    <div className='App'>
      <input value={message} onChange={handleMessage} />
      {data.map((person, i) => {
        return (
          <p>
            {person.name}님 연세가 {person.age}
          </p>
        );
      })}
    </div>
  );
}

export default withPersonData(App);
```

- Container Component: 로직을 담은 컴포넌트 / Presentation Component: 뷰를 담은 컴포넌트
- useHooks를 사용해 로직을 분리하기 시작하면서 조금씩 덜 사용하고 있다.

2. 주의사항

- Ref에 관해서는 바로 통과하여 전달될 수 없다.
- static Method를 정의할 때는 매번 복사해줘야 된다. (보통 라이브러리를 활용한다)

# Controlled Component

상태를 가지고 있는 태그를 관리하는 방법 (input, select, textarea)
