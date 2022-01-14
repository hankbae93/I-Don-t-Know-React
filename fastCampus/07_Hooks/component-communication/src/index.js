import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AlphaContext from "./contexts/AlphaContext";

const value = [
  { id: 0, name: "mark", age: 39 },
  { id: 1, name: "IU", age: 30 },
];

ReactDOM.render(
  <React.StrictMode>
    <AlphaContext.Provider value={value}>
      <App />
    </AlphaContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
