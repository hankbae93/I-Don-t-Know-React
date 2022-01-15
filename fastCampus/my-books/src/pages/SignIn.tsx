import { Redirect } from "react-router-dom";
import useToken from "../hooks/useToken";

import SignInContainer from "../containers/SignInContainer";

const SignIn = () => {
  const token = useToken();

  if (token !== null) {
    return <Redirect to='/' />;
  }

  return <SignInContainer />;
};

export default SignIn;
