import React from "react";

import Login from "./pages/Login";
import AppStore from "./globalStores/AppStore";
import Users from "./pages/Users";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "@rmwc/button/dist/styles";
import "@rmwc/textfield/dist/styles";

function App() {
  return (
    <AppStore.Provider>
      <Login>
        <Router>
          <Link to="/users">Users</Link>
          <Switch>
            <Route path="/users">
              <Users />
            </Route>
          </Switch>
        </Router>
      </Login>
    </AppStore.Provider>
  );
}

export default App;
