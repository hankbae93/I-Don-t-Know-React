import React, { useState } from "react";
import axios from "../api";
import useInput from "../hooks/useInput";

import Filter from "../components/Search/Filter";
import BookList from "../components/Search/BookList";

const Search = () => {
  const [list, setList] = useState([]);
  const [value, onChange] = useInput();

  const searchBooks = async (e) => {
    e.preventDefault();
    await axios.get(`/book?query=${value}&size=30`).then((res) => {
      if (res.data) {
        console.log(res.data, "책 리스트 조회");
        setList(res.data.documents ?? []);
      }
    });
  };

  return (
    <>
      <Filter />
      <form onSubmit={searchBooks}>
        <input
          placeholder='검색어를 입력해주세요'
          name='target'
          value={value}
          onChange={onChange}
          required
        />
      </form>
      <BookList data={list} />
    </>
  );
};

export default Search;
