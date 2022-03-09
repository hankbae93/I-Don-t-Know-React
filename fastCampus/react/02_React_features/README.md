# React.createElement
```jsx
React.createElement(
    type, // 태그 이름 문자열 | 리액트 컴포넌트 | React.Fragment
    [props],
    [...children]  
)        

const Component = ({ title }) => {
    return React.createElement('p', null, `${title}`);
}

ReactDOM.render(
    React.createElement(
        Component,
        { title: "HELLO" },
        null
    ),
    document.querySelector('#root')
);
```

# JSX
```jsx
const Component = () => {
    return <div title="intro">hELLo</div>
}

// babel
const Component = () => {
    //브라우저에 와서 이렇게 변환해준다
    return React.createElement('div', { title: "intro" }, "hELLo") 
}
```

1. className등 다른 키워드를 사용해야 하는 이유

    JSX는 Babel이 자바스크립트로 변환하기 전의 모습인데 class처럼 자바스크립트의 예약어와 부딪히거나 변환과정에 문제가 있을 수 있어 달라진 속성들이 많다.


# Props vs State
- 외부에서 주는 데이터 vs 내부에서 변경할 수 있는 데이터
- 둘 다 변경되면 렌더가 일어날 수 있다.

# LifeCycle

1. Initialization

- set up props and state

2. Mounting

- componentWillMount => render => componentDidMount

3. Updation

- shouldComponentUpdate => render => componentDidUpdate

4. Unmounting

- componentWillUnmount
