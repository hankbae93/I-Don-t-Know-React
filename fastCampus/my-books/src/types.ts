import { RouterState } from "connected-react-router";
import { AnyAction, Reducer } from "redux";

export type LoginReqType = {
  email: string;
  password: string;
};

export interface AuthState {
  token: string | null;
  loading: boolean;
  error: Error | null;
}

export interface BookType {
  bookId: number;
  title: string;
  author: string;
  createdAt: string;
  url: string;
}

export interface BooksState {
  books: BookType[] | null;
  loading: boolean;
  error: Error | null;
}

export interface BookReqType {
  message: string;
  title: string;
  author: string;
  url: string;
}

export interface RootState {
  auth: AuthState;
  books: BooksState;
  router: Reducer<RouterState<unknown>, AnyAction>;
}
