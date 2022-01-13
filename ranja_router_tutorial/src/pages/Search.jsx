import React, { useState, useLayoutEffect, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
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
  // const [authors, onAuthorsChange, setAuthors] = useQueryInput([], "authors")
  const [authors, setAuthors] = useState([]);
  const [clickedAuthors, setClickedAuthors] = useState([]);
  // 주소이동에 따른 API 호출
  // 각 필터, 검색어는 주소이동만 하고 그 주소이동 후 쿼리를 체크하고 API를 호출하게 설정
  const getBooks = async (query) => {
    await axios.get(`/book?query=${query}&size=30`).then((res) => {
      if (res.data) {
        const booksData = res.data.documents ?? [];
        setList((prev) => booksData);

        let newArr = [];
        booksData.forEach((book) => {
          newArr = newArr.concat(book.authors);
        });
        const filterd = new Set(newArr);
        if (authors[0]) {
          return;
        }
        setAuthors([...filterd]);
      }
    });
  };

  useEffect(() => {
    setClickedAuthors(
      Array(authors.length)
        .fill()
        .map((v) => false)
    );
  }, [authors]);

  useEffect(() => {
    const query = queryString.parse(location.search);
    let url = `/search?`;
    const name = "authors";
    const newArr = [];
    clickedAuthors.forEach((clicked, i) => {
      if (clicked) newArr.push(authors[i]);
    });
    console.log(newArr, "선택된 작각들");
    if (!query[name]) {
      for (const key in query) {
        url += `${key}=${query[key]}&`;
      }
      newArr.forEach((v, i) => {
        url += `${name}=${v}&`;
      });
    } else {
      for (const key in query) {
        if (key !== name) {
          url += `${key}=${name === key ? value : query[key]}&`;
        }
      }
      newArr.forEach((v, i) => {
        url += `${name}=${v}&`;
      });
    }

    history.push(url);
  }, [clickedAuthors]);

  const handleAuthor = (index) => {
    setClickedAuthors((prev) =>
      prev.map((v, i) => {
        return i === index ? !v : v;
      })
    );
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
      <div style={{ display: "flex" }}>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor='query'>
            <input
              placeholder='검색어를 입력해주세요'
              id='query'
              name='query'
              value={value}
              onChange={onChange}
              required
            />
          </label>

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

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {authors.map((author, i) => {
              return (
                <div key={i} onClick={(e) => handleAuthor(i)}>
                  <input
                    name={`authors${i}`}
                    type='checkbox'
                    checked={clickedAuthors[i]}
                  />
                  <span>{author}</span>
                </div>
              );
            })}
          </div>
        </form>
        {/* <Filter setList={setList} /> */}
      </div>
      <BookList data={list} />
    </>
  );
};

export default Search;
