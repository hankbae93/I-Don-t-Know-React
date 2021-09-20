const El = {
    type: "h1",
    props: {
        title: "foo",
        children: "Hello"
    }
}
// <h1 title="foo">Hello</h1> 이 HTML 문자열을 객체로 표현

const node = document.createElement(El.type);
node["title"] = El.props.title;
// <h1 title="foo"></h1> 태그 및 프로퍼티 생성

const text = document.createTextNode("");
text["nodeValue"] = El.props.children;

node.appendChild(text);
const container = document.getElementById("root");
container.appendChild(node);


function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children: children.map(child => 
                typeof child === "object"
                ? child
                : createTextElement(child)
            )
        },
    }
}

function createTextElement(text) {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: [],
        }
    }
}

const Didact = {
    createElement,
}

const element = Didact.createElement(
    "div",
    { id: "foo" },
    Didact.createElement("a", null, "bar"),
    Didact.createElement("b")
);

/*
    const element = (
        <div id="foo">
            <a>bar</a>
            <b />
        </div>
    )
*/


function render(element, container) {
    const dom = element.type === "TEXT_ELEMENT"
    ? document.createTextNode("")
    : document.createElement(element.type);

    const isProperty = (key) => key !== "children";
    Object.keys(element.props)
    .filter(isProperty)
    .forEach(name => {
        dom[name] = element.props[name];
    })

    element.props.children.forEach(child => 
        render(child, dom)
    )

    container.appendChild(dom);
}