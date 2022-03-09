import React from "react";
import { Link } from "react-router-dom";
import {
  BookOutlined,
  EditOutlined,
  HomeOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { BookType } from "../types";
import moment from "moment";
import { Button, Tooltip } from "antd";

interface BookProps extends BookType {
  deleteBook: (bookId: number) => void;
}

const Book: React.FC<BookProps> = ({
  bookId,
  title,
  author,
  createdAt,
  url,
  deleteBook,
}) => {
  return (
    <div>
      <div>
        <Link to={`/book/${bookId}`}>
          <BookOutlined /> {title}
        </Link>
      </div>
      <div>
        <Link to={`/book/${bookId}`}>{author}</Link>
      </div>
      <div>{moment(createdAt).format("MM-DD-YYYY hh:mm a")}</div>
      <div>
        <Tooltip title={url}>
          <a href={url} rel='no_referrer' target='_BLANK'>
            <Button
              size='small'
              type='primary'
              shape='circle'
              icon={<HomeOutlined />}
            />
          </a>
        </Tooltip>
        <Tooltip title='Edit'>
          <Button
            size='small'
            type='primary'
            shape='circle'
            icon={<EditOutlined />}
          />
        </Tooltip>
        <Tooltip title='DELETE'>
          <Button
            size='small'
            type='primary'
            shape='circle'
            danger
            icon={<DeleteOutlined />}
            onClick={clickDelete}
          />
        </Tooltip>
      </div>
    </div>
  );

  function clickDelete() {
    deleteBook(bookId);
  }
};

export default Book;
