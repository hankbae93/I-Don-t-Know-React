import React, { useState, useLayoutEffect, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "../api";
import useInput from "../hooks/useInput";
import queryString from "query-string";

import Filter from "../components/Search/Filter";
import BookList from "../components/Search/BookList";

const Search = () => {
  const history = useHistory();
  const location = useLocation();
  const [list, setList] = useState([]);
  const [value, onChange, setValue] = useInput("");

  const getBooks = async (query) => {
    await axios.get(`/book?query=${query}&size=30`).then((res) => {
      if (res.data) {
        console.log(res.data, "책 리스트 조회");
        setList(res.data.documents ?? []);
      }
    });
  };

  const searchBooks = async (e) => {
    e.preventDefault();
    history.push(`?query=${value}`);
    // await getBooks(value);
  };

  const filterBookByQuery = async () => {
    const query = queryString.parse(location.search);
    if (query.query) {
      setValue((prev) => query.query);
      await getBooks(query.query);
    } else {
      return;
    }

    if (query.price) {
      const queryPrice = parseInt(query.price);
      setPrice((prev) => queryPrice);
      setList((prev) => {
        console.log(
          prev.filter((data) => queryPrice >= data.sale_price),
          "모냐?"
        );
        return prev.filter((data) => queryPrice >= data.sale_price);
      });
    }
  };

  useLayoutEffect(() => {
    filterBookByQuery();
  }, [location]);

  const [price, onPriceChange, setPrice] = useInput(0);

  useEffect(() => {
    const query = queryString.parse(location.search);
    if (price > 0) {
      let str = "?";
      for (const key in query) {
        if (key === "price") {
          str += `${key}=${price}&`;
        } else {
          str += `${key}=${query[key]}&`;
        }
      }
      if (!query.price) {
        str += `price=${price}&`;
      }
      history.push(str);
    }
  }, [price]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <form onSubmit={searchBooks}>
          <input
            placeholder='검색어를 입력해주세요'
            name='target'
            value={value}
            onChange={onChange}
            required
          />
        </form>
        {/* <Filter setList={setList} /> */}
        <label htmlFor='price'>
          <h3>판매가</h3>
          <input
            id='price'
            type='range'
            min='0'
            max='100000'
            step={1000}
            value={price}
            onChange={onPriceChange}
          />
          <span>{price}</span>
        </label>
      </div>
      <BookList data={list} />
    </>
  );
};

export default Search;
