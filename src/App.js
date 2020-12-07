import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
