import React, { useState, useLayoutEffect, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "../api";
import useQueryInput from "../hooks/useQueryInput";
import queryString from "query-string";

import Filter from "../components/Filter";
import BookList from "../components/BookList";

const Search = () => {
  const history = useHistory();
  const location = useLocation();
  const [list, setList] = useState([]);
  const [value, onChange] = useQueryInput("", "query");
  const [price, onPriceChange] = useQueryInput(0, "price");

  // 주소이동에 따른 API 호출
  // 각 필터, 검색어는 주소이동만 하고 그 주소이동 후 쿼리를 체크하고 API를 호출하게 설정
  const getBooks = async (query) => {
    await axios.get(`/book?query=${query}&size=30`).then((res) => {
      if (res.data) {
        console.log(res.data, `${query}책 리스트 조회`);
        setList((prev) => res.data.documents ?? []);
      }
    });
  };

  const mountAction = async () => {
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
        // setList(prev => prev.filter(data => ))
      }
    }
  };

  useLayoutEffect(() => {
    mountAction();
  }, [location]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            placeholder='검색어를 입력해주세요'
            name='query'
            value={value}
            onChange={onChange}
            required
          />
          <label htmlFor='price'>
            <h3>판매가</h3>
            <input
              id='price'
              name='price'
              type='range'
              min='0'
              max='100000'
              step={100}
              value={price}
              onChange={onPriceChange}
            />
            <span>{price}</span>
          </label>
          {/* <label htmlFor='price'>
            <h3>판매가</h3>
            <input
              id='price'
              name='price'
              type='range'
              min='0'
              max='100000'
              step={100}
              value={price}
              onChange={onPriceChange}
            />
            <span>{price}</span>
          </label> */}
        </form>
        {/* <Filter setList={setList} /> */}
      </div>
      <BookList data={list} />
    </>
  );
};

export default Search;
