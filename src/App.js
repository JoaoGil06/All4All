import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Incident from "./pages/Incident";
import NewIncident from "./pages/NewIncident";

import { useAuth, checkAuthChanged } from "./context/auth";

function App() {
  const { setUser } = useAuth();

  useEffect(() => {
    checkAuthChanged(setUser);
  }, [setUser]);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/incidents/new" component={NewIncident} />
          <Route path="/incidents/incident" component={Incident} />
        </Switch>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
