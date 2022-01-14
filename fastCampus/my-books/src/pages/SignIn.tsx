import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import SignInContainer from "../containers/SignInContainer";
import { RootState } from "../types";

const SignIn = () => {
  const token = useSelector<RootState, string | null>(
    (state) => state.auth.token
  );

  if (token !== null) {
    return <Redirect to='/' />;
  }

  return <SignInContainer />;
};

export default SignIn;
