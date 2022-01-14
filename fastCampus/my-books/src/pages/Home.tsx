import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { RootState } from "../types";
import { logout } from "../redux/modules/auth";
import ListContainer from "../containers/ListContainer";

const Home = () => {
  const dispatch = useDispatch();
  const token = useSelector<RootState, string | null>(
    (state) => state.auth.token
  );

  if (token === null) {
    return <Redirect to='/signin' />;
  }
  return <ListContainer />;

  function click() {
    dispatch(logout());
  }
};

export default Home;
