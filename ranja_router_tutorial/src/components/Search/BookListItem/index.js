import React from "react";

import {
  Container,
  BookThumbnail,
  BookContents,
} from "./BookListItem.elements";

const BookListItem = ({ data }) => {
  const {
    authors,
    contents,
    datetime,
    isbn,
    price,
    publisher,
    sale_price,
    status,
    thumbnail,
    title,
    translators,
    url,
  } = data;
  return (
    <Container>
      <h2>{title}</h2>
      <BookThumbnail>
        <img src={thumbnail} />
      </BookThumbnail>
      <BookContents>{contents}</BookContents>
    </Container>
  );
};

export default BookListItem;
