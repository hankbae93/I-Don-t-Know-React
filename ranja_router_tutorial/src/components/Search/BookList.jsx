import React from "react";
import styled from "styled-components";

import BookListItem from "./BookListItem";

const Wrapper = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  list-style: none;
`;

const BookList = ({ data }) => {
  return (
    <Wrapper>
      {data.map((book, i) => {
        return <BookListItem data={book} key={book?.isbn} />;
      })}
    </Wrapper>
  );
};

export default BookList;
