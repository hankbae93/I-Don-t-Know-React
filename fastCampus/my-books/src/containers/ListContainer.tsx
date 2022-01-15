import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "../components/List";
import { BookType, RootState } from "../types";
import { getBooks as getBooksSagaStart } from "../redux/modules/books";

const ListContainer = () => {
  const books = useSelector<RootState, BookType[] | null>(
    (state) => state.books.books
  );
  const loading = useSelector<RootState, boolean>(
    (state) => state.books.loading
  );

  const dispatch = useDispatch();

  const getBooks = useCallback(() => {
    dispatch(getBooksSagaStart());
  }, [dispatch]);
  return <List books={books} loading={loading} getBooks={getBooks} />;
};

export default ListContainer;
