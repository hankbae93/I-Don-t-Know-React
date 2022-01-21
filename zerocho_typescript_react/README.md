## ts-loader

```json
{
    ...
    "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "typescript": "^3.9.10" // 최신 5버전이 awesome-typescript-loader 지원안함
  },
  "devDependencies": {
    "awesome-typescript-loader": "^5.2.1",
    "webpack": "^5.66.0",
    "webpack-cli": "^4.9.1"
  }
}
```

## import React from 'react' In Typescript

1. can only be default-imported using the 'esModuleInterop' flag

```tsx
// can only be default-imported using the 'esModuleInterop' flag 라는 에러메세지를 볼 수 있다.
import React from "react";
import ReactDOM from "react-dom";

// 아래와 같이 변경해야 에러가 나지 않는 것을 확인 할 수 있다.
const React = require("react");
const ReactDOM = require("react-dom");

// 위 문법은 노드에서 많이 쓰기 때문에 주로 이렇게 작성하라고 권장한다.
import * as React from "react";
import * as ReactDOM from "react-dom";
```

2. esModuleInterop 이란?

```tsx
@types/react 파일
export = React; // common.js export 와 같은 의미
export as namespace React;
```

- 타입스크립트(@types/react)에서는 export default가 없어서 이렇게 작성할 수 없다.
- 그래서 tsconfig.json에 esModuleInterop을 true로 바꿔주면 원래대로 작성할 수 있다.
- CRA 타입스크립트 세팅에는 자동으로 true로 바꿔놓은걸 확인할 수 있다.

3. Common JS

자바스크립트의 모듈화 명세를 만든 대표적인 그룹 중 'CommonJS'가 있고, 이 CommonJS의 명세가 현재 node의 표준이 되어있다.

```js
// 내보내기
export { something }
// 가져오기
import { something } from './파일명'
// 모든 객체를 가져오되 원하는 이름을 붙여서 사용가능
import * as obj from './파일명'

// default 키워드
export default 내보낼 변수명
// default 키워드를 이용한 경우, 내보낸 쪽에서 사용한 명칭을 그대로 사용하지 않아도 된다.
import 바꿀변수명 from './파일명'

import * as React from "react";
// import * as React, { useState } from "react"; 이런 문법은 불가능
import { useState } from 'react';

```

## useCallback in Typescript

함수를 하나 더 씌우면 타입추론을 하는데 방해하기 때문에 인라인에 쓸때는 useCallback의 제네릭에 타이핑해주기도 한다..

```tsx
const App: React.FC = () => {
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <input
      onChange={useCallback<(e: React.ChangeEvent<HTMLInputElement>) => void>(
        (e) => {
          setValue(e.target.value);
        },
        []
      )}
    />
  );
};
```
