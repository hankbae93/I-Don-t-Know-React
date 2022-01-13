import React from "react";
import styled from "styled-components";

import BookListItem from "./BookListItem";

const Wrapper = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  flex-wrap: wrap;
  flex-grow: 1;
  gap: 15px;
  list-style: none;
  padding: 0 3%;
`;

const BookList = ({ data }) => {
  return (
    <Wrapper>
      {data.map((book, i) => {
        return <BookListItem data={book} key={book?.isbn} />;
      })}
      {data.length === 0 && <div>조회되는 서적이 없습니다.</div>}
    </Wrapper>
  );
};

export default BookList;
