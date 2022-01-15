import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { goBack } from "connected-react-router";
import { BookReqType, RootState } from "../types";
import { logout as logoutSagaStart } from "../redux/modules/auth";
import { addBook as addBookSagaStart } from "../redux/modules/books";

import Add from "../components/Add";

const AddContainer = () => {
  const loading = useSelector<RootState, boolean>(
    (state) => state.books.loading
  );

  const dispatch = useDispatch();

  const back = useCallback(() => {
    dispatch(goBack());
  }, [dispatch]);

  const logout = useCallback(() => {
    dispatch(logoutSagaStart());
  }, [dispatch]);

  const add = useCallback(
    (book: BookReqType) => {
      dispatch(addBookSagaStart(book));
    },
    [dispatch]
  );

  return <Add loading={loading} back={back} add={add} logout={logout} />;
};

export default AddContainer;
