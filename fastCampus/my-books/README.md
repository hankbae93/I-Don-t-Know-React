# 세팅

    npx create-react-app {project} --template typescript
    npm i --save-dev @types/react-router-dom
    앞으로 @types 라는 타이핑된 라이브러리를 자주 설치하게 될 것이다.

# react-error-boundary

```jsx
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

- components
- containers
- pages
- redux
- services
