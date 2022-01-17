1. serve
   npm install serve -g

2. express

```js
const express = require("express");
const fs = require("fs");
const path = require("path");
const ReactDOMServer = require("react-dom/server");

const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/test", (req, res) => {
  const ssr = ReactDOMServer.renderToString(
    React.createElement("div", null, "안녕하세요")
  ); // ssr은 이후에 로드될 스크립트의 컴포넌트와 같아야한다.
  // 또는 data-reactroot등을 활용해서 변경해주는 작업이 필요할 것이다.

  const indexHtml = fs
    .readFileSync(path.join(__dirname, "build", "index.html"))
    .toString()
    .replace('<div id="root"></div>', `<div id="root">${ssr}</div>`);
  res.send(indexHtml);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(9000);
```
