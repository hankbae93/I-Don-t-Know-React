# style-loader

```js
// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
```

webpack에서 각 확장자파일의 정규 표현식을 확인할 수 있다.

```js
// 어떤 로더를 사용할지 설정
{
    test: cssRegex,
    exclude: cssModuleRegex, // css모듈을 제외하고
    use: getStyleLoaders({ // styleLoader
    importLoaders: 1,
    sourceMap: isEnvProduction
        ? shouldUseSourceMap
        : isEnvDevelopment,
    modules: {
        mode: 'icss',
    },
    }),
    sideEffects: true,
},
```

```jsx
import "./App.css";
// 리액트에서 이런 확장자파일을 어떻게 다루는지 웹팩에 적혀있다.
```

# css

리액트 자체에서 컴포넌트별로 css를 다루는 것이 아니기에 주의해야한다.
콘솔을 확인하면 import 순서대로 head에 적혀있는걸 확인할 수 있다.

1. naming으로 극복하기 (BEM 방법론)

```css
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}
```

```jsx
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```

2. scss 활용하기

```scss
.App {
  text-align: center;

  .logo {
    height: 40vmin;
    pointer-events: none;
  }

  header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  link {
    color: #61dafb;
  }
}
```

- npm i sass

```jsx
import "./App.scss";
function App() {
  return (
    <div className='App'>
      <header className='header'>
        <img src={logo} className='logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```

# CSS Modules

https://create-react-app.dev/docs/adding-a-css-modules-stylesheet

css가 전역적으로 실행되기에 스코프 관리를 위해 생겼다.

- 값은 실제 className과 겹치지 않을 것으로 생성

```jsx
import styles from "./App.module.css";
console.log(styles);
/*
[filename]\_[classname]\_\_[hash]
파일이름 클래스명 hash값이 붙여져서 값에 할당된다.
*/
{
  App: "App_App__ZzDgA",
  App-header: "App_App-header__usvDw",
  App-link: "App_App-link__+ZL0H",
  App-logo: "App_App-logo__wdkL5",
  App-logo-spin: "App_App-logo-spin__kf7rs",
}
```

- 전역으로 css를 추가하고 import한 스타일 객체가 원래 우리가 쓰던 className에 변경되서 사용한다.

```css
.App_App__ZzDgA {
  text-align: center;
}

.App_App-logo__wdkL5 {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App_App-logo__wdkL5 {
    animation: App_App-logo-spin__kf7rs infinite 20s linear;
  }
}

.App_App-header__usvDw {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App_App-link__\+ZL0H {
  color: #61dafb;
}

@keyframes App_App-logo-spin__kf7rs {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

- 사람들이 class를 직접 건드려 오염시키지 않고 관리할 수 있게 된다.

```jsx
function App() {
  return (
    <div className={styles["App"]}>
      <header className={styles["App"]}>
        <img src={logo} className='logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles["link"]}
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```

- class 동적으로 바꾸기

```jsx
import React, { useState } from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  const [isClick, setIsClick] = useState(false);
  return (
    <button
      onClick={() => setIsClick((prev) => !prev)}
      className={styles[isClick ? "button" : "loading"]} // 단일 클래스 변경하기
      className={isClick ? `${styles["active"]} ${styles["primary"]}` : ""} // 복수는 이런식으로
      {...props}
    >
      클릭
    </button>
  );
};
```

- 위 코드를 작성하다보면 너무 번거로움이 느껴진다. classNames라는 라이브러리를 사용해보자

```jsx
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const Button = (props) => {
  const [isClick, setIsClick] = useState(false);
  return (
    <button
      onClick={() => setIsClick((prev) => !prev)}
      {...props}
      // className={
      //   isClick ? `${classNames(styles["active"], styles["primary"])}` : ""
      // }
      // 이렇게 알아서 한칸 띄어서 클래스네임 string을 반환해준다.
      className={cx("active", { primary: isClick })}
      // 이걸 더 편하게 사용할 수 있게 classname에서 제공한다. 키의 값이 false인경우 해당 클래스는 제외하고 리턴한다.
    >
      클릭
    </button>
  );
};
```

# Styled Components

1. 컴포넌트를 스타일컴포넌트로 스타일을 덮는 법

```jsx
import StyledButton from "./components/StyledButton";
import styled from "styled-components";

const UppercaseButton = (props) => (
  <button {...props} children={props.children.toUpperCase()} />
);

function App() {
  return <StyledButton as={UppercaseButton}>ranja</StyledButton>;
}
```

- 제일 많이 사용하는 방식

```jsx
const MyButton = (props) => (
  <button className={props.className} children={`MyButton ${props.children}`} />
);

const StyledMyButton = styled(MyButton)`
  background-color: transparent;
  border-radius: 15px;
  padding: 10px 30px;
  color: #fff;
  margin: 1em;

  ${(props) =>
    props.primary &&
    css`
      background-color: #fff;
      color: #2b2b2b;
    `}
`;
```

2. 전역 스타일 만드는 법

```jsx
import styled, { css, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  button {
    color: yellow;
  }
`;

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
    </div>
  );
}
```

3. 기본 속성 주기

```jsx
import styled, { css } from "styled-components";

const StyledA = styled.a.attrs((props) => ({
  target: "_BLANK",
}))`
  color: ${(props) => props.color};
`;

export default StyledA;

- App.js
<StyledA color="red">얍</StyledA>
```

# Antd

컴포넌트 라이브러리
