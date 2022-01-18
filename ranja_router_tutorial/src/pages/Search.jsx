import React, { useState, useLayoutEffect, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "../api";
import queryString from "query-string";

import Filter from "../components/Filter";
import BookList from "../components/BookList";

const Search = () => {
  const location = useLocation();
  const [list, setList] = useState([]);

  const getBooks = async (query) => {
    await axios.get(`/book?query=${query}&size=30`).then((res) => {
      console.log(res);
      if (res.data) {
        const booksData = res.data.documents ?? [];
        setList((prev) => booksData);
      }
    });
  };

  const sortByQuery = () => {
    const query = queryString.parse(location.search);
    if (query.price) {
      setList((prev) => prev.filter((item) => item.sale_price <= query.price));
    }
    if (query.date) {
      setList((prev) =>
        prev.filter((item) => {
          const itemDate = new Date(item.datetime);
          const queryDate = new Date(query.date);
          return queryDate < itemDate;
        })
      );
    }
  };

  const init = async () => {
    const query = queryString.parse(location.search);
    const isQuery = Object.keys(query).length !== 0;
    if (query.query) {
      await getBooks(query.query);
      sortByQuery();
    } else {
      setList([]);
    }
  };

  useLayoutEffect(() => {
    init();
  }, [location]);

  return (
    <>
      <Filter data={list} />
      <BookList data={list} setList={setList} />
    </>
  );
};

export default Search;
