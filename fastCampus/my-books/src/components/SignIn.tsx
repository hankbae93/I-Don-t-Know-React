import React, { useRef } from "react";
import { Button, Col, Input, Row } from "antd";
import { LoginReqType } from "../types";
import styles from "SignIn.module.css";

interface SignInProps {
  login: (reqData: LoginReqType) => void;
}

const SignIn: React.FC<SignInProps> = ({ login }) => {
  const emailRef = useRef<Input>(null);
  const passwordRef = useRef<Input>(null);

  return (
    <Row align='middle'>
      <Col span={24}>
        <Row>
          <Col span={12}></Col>
          <Col span={12}>
            <div>MY BOOKS</div>
            <div>Plesase Note Your Opinion</div>
            <div />
            <div>
              Email<span> *</span>
            </div>
            <div>
              <Input
                placeholder='Email'
                autoComplete='email'
                name='email'
                ref={emailRef}
              />
            </div>
            <div>
              <Input
                type='password'
                autoComplete='current-password'
                name='password'
                ref={passwordRef}
              />
            </div>
            <div>
              <Button size='large' onClick={click}>
                Sign In
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
      <h1>Sign In</h1>
    </Row>
  );

  function click() {
    const email = emailRef.current!.state.value;
    const password = passwordRef.current!.state.value;

    login({ email, password });
  }
};

export default SignIn;
