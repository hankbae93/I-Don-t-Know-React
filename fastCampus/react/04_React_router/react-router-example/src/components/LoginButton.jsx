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
