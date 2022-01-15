import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { BookType, RootState } from "../types";
import { getBooks as getBooksSagaStart } from "../redux/modules/books";
import { logout as logoutSagaStart } from "../redux/modules/auth";

import List from "../components/List";

const ListContainer = () => {
  const books = useSelector<RootState, BookType[] | null>(
    (state) => state.books.books
  );
  const loading = useSelector<RootState, boolean>(
    (state) => state.books.loading
  );
  const error = useSelector<RootState, Error | null>(
    (state) => state.books.error
  );

  const dispatch = useDispatch();

  const getBooks = useCallback(() => {
    dispatch(getBooksSagaStart());
  }, [dispatch]);

  const logout = useCallback(() => {
    dispatch(logoutSagaStart());
  }, [dispatch]);

  const goAdd = useCallback(() => {
    dispatch(push("/add"));
  }, [dispatch]);

  return (
    <List
      books={books}
      loading={loading}
      getBooks={getBooks}
      error={error}
      logout={logout}
      goAdd={goAdd}
    />
  );
};

export default ListContainer;
