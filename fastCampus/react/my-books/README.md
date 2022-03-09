# 세팅

    npx create-react-app {project} --template typescript
    npm i --save-dev @types/react-router-dom
    앞으로 @types 라는 타이핑된 라이브러리를 자주 설치하게 될 것이다.

# react-error-boundary

```tsx
import { ErrorBoundary } from "react-error-boundary";
function App() {
  return (
    //   에러 발생 시 해당 컴포넌트로 렌더
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/edit:id' component={Edit} />
          <Route exact path='/book:id' component={Detail} />
          <Route exact path='/add' component={Add} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/' component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
```

# 폴더 구조

- pages
- containers
- components
- hooks
- redux
- services

## pages

주로 페이징 처리에 관련된 로직을 넣자.

```tsx
import { Redirect } from "react-router-dom";
import useToken from "../hooks/useToken";

import AddContainer from "../containers/AddContainer";

const Add = () => {
  const token = useToken();

  if (token === null) {
    return <Redirect to='/signin' />;
  }
  return <AddContainer />;
};

export default Add;
```

## containers

최소 단위 컴포넌트들이 쓸 Fetching 함수, 또는 데이터를 props로 물려주도록 짜보자.

```tsx
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { BookType, RootState } from "../types";
import {
  getBooks as getBooksSagaStart,
  deleteBook as deleteBookSagaStart,
} from "../redux/modules/books";
import { logout as logoutSagaStart } from "../redux/modules/auth";

import List from "../components/List";

const ListContainer = () => {
  const books = useSelector<RootState, BookType[] | null>(
    (state) => state.books.books
  );
  const loading = useSelector<RootState, boolean>(
    (state) => state.books.loading
  );
  const error = useSelector<RootState, Error | null>(
    (state) => state.books.error
  );

  const dispatch = useDispatch();

  const getBooks = useCallback(() => {
    dispatch(getBooksSagaStart());
  }, [dispatch]);

  const logout = useCallback(() => {
    dispatch(logoutSagaStart());
  }, [dispatch]);

  const goAdd = useCallback(() => {
    dispatch(push("/add"));
  }, [dispatch]);

  const deleteBook = useCallback(
    (bookId: number) => {
      dispatch(deleteBookSagaStart(bookId));
    },
    [dispatch]
  );

  return (
    <List
      books={books}
      loading={loading}
      getBooks={getBooks}
      error={error}
      logout={logout}
      goAdd={goAdd}
      deleteBook={deleteBook}
    />
  );
};

export default ListContainer;
```

## components

props를 토대로 렌더링만 충실하게 할 수 있도록 짜보자.

모든 로직은 결국 컨테이너에 담겨져 있는 걸 확인할 수 있고 컴포넌트에 적힌 함수는 그 물려받은 함수에 필요한 인자를 넣는 역할만 한다.

Testing이나 design system(storybook)같은 작업 시에도 hooks를 활용해 거기에 로직을 담아 컴포넌트 단위로 쪼개던 container에 로직을 담던 분리할 필요가 있다.

```tsx
import { useEffect } from "react";
import { Button, PageHeader, Table } from "antd";
import { BookType } from "../types";

import Layout from "./Layout";
import Book from "./Book";

interface ListProps {
  books: BookType[] | null;
  loading: boolean;
  getBooks: () => void;
  error: Error | null;
  logout: () => void;
  goAdd: () => void;
  deleteBook: (bookId: number) => void;
}

const List: React.FC<ListProps> = ({
  books,
  loading,
  getBooks,
  error,
  logout,
  goAdd,
  deleteBook,
}) => {
  useEffect(() => {
    getBooks();
  }, [getBooks]);

  useEffect(() => {
    if (error) {
      logout();
    }
  }, [error, logout]);

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
            render: (text, record) => (
              <Book {...record} deleteBook={deleteBook} />
            ),
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
```

```tsx
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
```

## hooks

공통으로 쓰이는 로직이 필요할 때가 있##

어떤 값을 조회해야하거나 어떤 행동이 필요하거나 (예를 들어 풀스크린, resize 시 UI 변경 등등)

공통적으로 적용되는 로직은 훅스를 활용해 분리해둔다.

방법에 따라 컴포넌트 단위로 hooks폴더가 따로 존재할 수도 있다.

```tsx
import { useSelector } from "react-redux";
import { RootState } from "../types";

export default function useToken() {
  const token = useSelector<RootState, string | null>(
    (state) => state.auth.token
  );
  return token;
}
```

## redux

이 소스는 redux-saga로 작성되어진 코드## 해당 폴더에는 리덕스 관련 세팅과 리듀서들이 담겨져 있다.

```tsx
import { push } from "connected-react-router"; // 리덕스가 history 객체를 사용하기 위해 지원하는 라이브러리
import { Action, createActions, handleActions } from "redux-actions";
import { call, put, select, takeEvery } from "redux-saga/effects";
// API 요청 관련 로직은 여기 서비스 폴더에서 작성된다.
import TokenService from "../../services/TokenService";
import UserService from "../../services/UserService";
import { AuthState, LoginReqType } from "../../types";

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
};

const prefix = "my-books/auth";

/*
createActions : 액션 생성 함수, 해당 키워드와 prefix를 붙여서 액션함수를 자동으로 생성해준다.
*/
const { pending, success, fail } = createActions("PENDING", "SUCCESS", "FAIL", {
  prefix,
}); //

const reducer = handleActions<AuthState, string>(
  {
    PENDING: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      token: action.payload,
      loading: false,
      error: null,
    }),
    FAIL: (state, action: any) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  { prefix }
);

export default reducer;

// 여기서는 이제 컴포넌트에서 dispatch할 액션함수들이 잔뜩 적혀잇다.
export const { login, logout } = createActions("LOGIN", "LOGOUT", { prefix });

// dispatch가 리덕스의 리듀서로 전달되기 전에 여기 saga 미들웨어에서 한번 채간다.
// 비동기작업을 마치고 데이터를 가공해 다시 리듀서로 전달한다.
function* loginSaga(action: Action<LoginReqType>) {
  try {
    yield put(pending());
    const token: string = yield call(UserService.login, action.payload);
    TokenService.set(token);
    yield put(success(token));
    // push
    yield put(push("/"));
  } catch (error: any) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOW ERROR")));
  }
}

function* logoutSaga() {
  try {
    yield put(pending());
    const token: string = yield select((state) => state.auth.token);
    yield call(UserService.logout, token);
    TokenService.set(token);
  } catch (error) {
  } finally {
    TokenService.remove();
    yield put(success(null));
  }
}

export function* authSaga() {
  yield takeEvery(`${prefix}/LOGIN`, loginSaga);
  yield takeEvery(`${prefix}/LOGOUT`, logoutSaga);
}
```

## services

api 요청에 관한 로직을 주로 담아둔다.

```tsx
import axios from "axios";
import { LoginReqType } from "../types";

const USER_API_URL = "https://api.marktube.tv/v1/me";

export default class UserService {
  public static async login(reqData: LoginReqType): Promise<string> {
    const response = await axios.post(USER_API_URL, reqData);
    return response.data.token;
  }

  public static async logout(token: string): Promise<void> {
    await axios.delete(USER_API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}
```
