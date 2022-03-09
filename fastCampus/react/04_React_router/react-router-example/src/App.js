import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Links from "./components/Links";
import NavLinks from "./components/NavLinks";

const isLogin = true;

function App() {
  return (
    <BrowserRouter>
      <Links />
      <NavLinks />
      <Switch>
        <Route
          path='/login'
          render={() => (isLogin ? <Redirect to='/' /> : <Login />)}
        />
        {/* <Route path='/login' component={Login} /> */}
        <Route path='/about/:id' component={About} />
        <Route path='/about' component={About} />
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
