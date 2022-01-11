# Dynamic Routing

```jsx
// App.jsx
const App = () => {
  return (
    <Router>
      <Route path='/about/:id' component={About} />
    </Router>
  );
};

// About.jsx
import { useParams } from "react-router-dom";
const About = (props) => {
  const params = useParams(); //파라미터값을 활용하는 메소드
  return <div>{params.id}</div>;
};

import queryString from "query-string";
const About = (props) => {
  const searchParams = props.location.search;
  /*
        브라우저 내장 API, 익스플로어에선 사용 불가능
        const obj = new URLSearchParams(searchParams);
        console.log(obj.get("name"));
    */
  const query = queryString.parse(searchParams);
  return (
    <div>
      <h2>About 페이지</h2>
      {query.name && <p>name은 {query.name}입니다.</p>}
    </div>
  );
};
```

- v6버전부터는 querystring대신 useSearchParams를 활용하기도 한다.

# Switch

```jsx
const App = () => {
  return (
    <Router>
      <Switch>
        {/* switch문처럼 정확하게 맞는 path의 컴포넌트를 보여준다. */}
        <Route path='/about/:id' component={About} />
        <Route path='/about' component={About} />
        <Route exact path='/' component={Home} />
        {/* 말그대로 swith이기에 notFount page를 보여주기 전 home에 걸릴 수 있어 exact 추가 */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
```

# anchor태그를 쓰면 안되는 이유

리액트 라우터의 특성을 무시하고 브라우저가 새로운 경로라 인식하고 이동하게되어 스크립트를 다시 다운받게 된다.

# 자식 컴포넌트에서 라우팅 메소드 사용하기

```jsx
const LoginButton = (props) => {
  console.log(props); // 라우트 컴포넌트 자식들은 빈객체가 나오는 걸 확인할 수 있다.
  const login = () => {
    setTimeout(() => {
      props.history.push("/");
    }, 1000);
  };

  return <button onClick={login}>로그인하기</button>;
};

export default LoginButton;
```

1. withRouter(HOC)

```jsx
import React from "react";
import { withRouter } from "react-router-dom";

const LoginButton = withRouter((props) => {
  console.log(props);
  const login = () => {
    setTimeout(() => {
      props.history.push("/");
    }, 1000);
  };

  return <button onClick={login}>로그인하기</button>;
});

export default LoginButton;
```

2. useHistory

```jsx
import React from "react";
import { useHistory } from "react-router-dom";

const LoginButton = (props) => {
  const history = useHistory();
  const login = () => {
    setTimeout(() => {
      history.push("/");
    }, 1000);
  };

  return <button onClick={login}>로그인하기</button>;
};

export default LoginButton;
```
