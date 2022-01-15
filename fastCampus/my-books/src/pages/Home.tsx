import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { RootState } from "../types";
import ListContainer from "../containers/ListContainer";

const Home = () => {
  const token = useSelector<RootState, string | null>(
    (state) => state.auth.token
  );

  if (token === null) {
    return <Redirect to='/signin' />;
  }
  return <ListContainer />;
};

export default Home;
