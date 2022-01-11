import { Route, Switch, BrowserRouter } from "react-router-dom";
import NavLinks from "./components/NavLinks";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavLinks />
        <Switch>
          <Route path='/search' component={Search} />
          <Route exact path='/' component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
