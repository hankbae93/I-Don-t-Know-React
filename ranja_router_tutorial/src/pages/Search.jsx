import React, { useState, useLayoutEffect, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "../api";
import queryString from "query-string";

import Filter from "../components/Filter";
import BookList from "../components/BookList";

const Search = () => {
  const location = useLocation();
  const [list, setList] = useState([]);

  // 주소이동에 따른 API 호출
  // 각 필터, 검색어는 주소이동만 하고 그 주소이동 후 쿼리를 체크하고 API를 호출하게 설정
  const getBooks = async (query) => {
    await axios.get(`/book?query=${query}&size=30`).then((res) => {
      if (res.data) {
        const booksData = res.data.documents ?? [];
        setList((prev) => booksData);
      }
    });
  };

  const init = async () => {
    const query = queryString.parse(location.search);
    const isQuery = Object.keys(query).length !== 0;
    if (isQuery) {
      if (query.query) {
        await getBooks(query.query);
      }

      if (query.price) {
        setList((prev) =>
          prev.filter((data) => query.price >= data.sale_price)
        );
      }

      if (query.authors) {
        const authors = query.authors;
        setList((prev) =>
          prev.filter((data) => data.authors.some((el) => authors.includes(el)))
        );
      }
    }
  };

  useLayoutEffect(() => {
    init();
  }, [location]);

  return (
    <>
      <Filter data={list} />
      <BookList data={list} />
    </>
  );
};

export default Search;
