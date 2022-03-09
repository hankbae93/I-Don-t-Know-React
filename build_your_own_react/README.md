```js
const element = {
  type: "h1",
  props: {
    title: "foo",
    children: "hello",
  },
};

const container = document.getElementById("root");

// element node
const node = document.createElement(element.type);
node["title"] = element.props.title;

// text node
const text = document.createTetNode("");
text["nodeValue"] = element.props.children;

node.appendChild(text);
container.appendChild(node);
```
