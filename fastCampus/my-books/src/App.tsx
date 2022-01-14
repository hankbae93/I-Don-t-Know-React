import React from "react";
import { Route, Switch } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./history";

import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";
import Add from "./pages/Add";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path='/edit:id' component={Edit} />
          <Route exact path='/book:id' component={Detail} />
          <Route exact path='/add' component={Add} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/' component={Home} />
          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </ErrorBoundary>
  );
}

export default App;
