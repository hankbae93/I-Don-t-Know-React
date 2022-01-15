import { useEffect } from "react";
import { Button, PageHeader, Table } from "antd";
import { BookType } from "../types";

import Layout from "./Layout";
import Book from "./Book";

interface ListProps {
  books: BookType[] | null;
  loading: boolean;
  getBooks: () => void;
}

const List: React.FC<ListProps> = ({ books, loading, getBooks }) => {
  useEffect(() => {
    getBooks();
  }, [getBooks]);

  const goAdd = () => {};
  const logout = () => {};

  return (
    <Layout>
      <PageHeader
        title={<div>BookList</div>}
        extra={[
          <Button type='primary' key='2' onClick={goAdd}>
            Add BOOK
          </Button>,
          <Button type='primary' key='1' onClick={logout}>
            Logout
          </Button>,
        ]}
      />
      <Table
        dataSource={books || []}
        columns={[
          {
            title: "Book",
            dataIndex: "book",
            key: "book",
            render: (text, record) => <Book {...record} />,
          },
        ]}
        loading={books === null || loading}
        showHeader={false}
        rowKey={"bookId"}
        pagination={false}
      />
    </Layout>
  );

  function click() {}
};

export default List;
