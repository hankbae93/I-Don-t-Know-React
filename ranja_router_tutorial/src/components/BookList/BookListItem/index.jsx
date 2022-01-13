import React from "react";
import moment from "moment";

import {
  Container,
  BookThumbnail,
  BookInfo,
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
      <div style={{ width: "100%" }}>
        <BookInfo>
          <p>{sale_price}</p>
          <p>{moment(datetime).format("YYYY.MM.DD")}</p>
          <p>{authors.join(",")}</p>
        </BookInfo>
        <BookContents>{contents}</BookContents>
      </div>
    </Container>
  );
};

export default BookListItem;
