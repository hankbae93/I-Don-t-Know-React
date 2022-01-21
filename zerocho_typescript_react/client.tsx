import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";

import GuGuDan from "./GuGuDan";
import GuGuDanClass from "./GuGuDanClass";
import WordRelay from "./WordRelay";

const Hot = hot(WordRelay);

ReactDOM.render(<Hot />, document.querySelector("#root"));
