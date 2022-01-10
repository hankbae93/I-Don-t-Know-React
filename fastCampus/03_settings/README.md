# CRA

1. webpack

- babel-loader: babel로 js, jsx확장자 파일을 컴파일

- css-loader

# ESLint

리액트뿐만 아니라 모든 자바스크립트 코딩스타일 모듈

```json
{
    ...
    "eslintConfig": {
        "extends": [
            "react-app",
            "prettier" //이러면 프리티어와 충돌되는 규칙을 끄게된다.
        ]
    }
}
```

# husky + lint-staged

git hooks made easy.

협업에서 commit이나 push같은 액션전에 파일을 체크하고 점검할 수 있다.

    npm i husky -D
    // npx husky-init
    npx husky add .husky/pre-commit "npm test"
    npm i lint-staged

```js
{
    "lint-staged": {
        "**/*.js": [ // 모든폴더의 js에서 배열의 명령어를 실행하겟다.
            "eslint --fix",
            "prettier --write",
            "git add"
        ]
    },
}
```
