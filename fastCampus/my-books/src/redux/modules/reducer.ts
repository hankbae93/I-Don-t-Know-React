import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import auth from "./auth";
import books from "./books";
import { History } from "history";

const reducer = (history: History<unknown>) =>
  combineReducers({
    auth,
    books,
    router: connectRouter(history),
  });

export default reducer;
