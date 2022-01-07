# Angular vs React vs Vue
1. Angular
- 크로스플랫폼 (어떤 환경에서든 하나의 코드베이스로 결과물 만듬)
- 모든 기능이 framework내에서 제공됨 (testing, 애니메이션, 웹 접근성, 인증 등)

2. Vue 
- 프레임워크나 라이브러리로 사용할지 선택 가능

3. React
- UI를 표현하고 설계하기 위한 라이브러리

<br/>

# Component
```js
<!-- html element tag -->
<img src="이미지 주소" />
<button class="클래스 이름">버튼</button>

<!-- Component -->
const props = {
    class: "클래스",
    src: 'Mark.img',
    buttonContent: "버튼"
};
// 내가 넣어주는 데이터(props)에 따라 태그를 재사용할 수 있다.
<MyComponent>
    <img src={props.src} />
    <button class={props.class}>{props.buttonContent}</button>
</MyComponent>
```

<br/>

# VirtualDom
- DOM을 직접 제어할 경우 바뀐 부분만 정확히 바꿔야 한다.
- 가상의 돔 트리를 사용해 이전 상태와 이후 상태 비교 후에 바뀐 부분만 알아서 바꾸고 업데이트

<br/>

# CSR
- Js가 전부 다운로드 되기전까지는 화면이 보이지 않음

- SSR: js가 전부 다운로드 되지 않아도, 일단 화면 HTML을 다운받은뒤 js 다운

# 리액트 핵심 모듈 

```jsx
import ReactDOM from 'react-dom';
import React from 'react';
```