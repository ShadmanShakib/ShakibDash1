import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LogIn } from "../pages/auth";
import { Dashboard } from "../pages/user";
import PrivateRoute from "./PrivateRoute";

function Root() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route path="/login" component={LogIn} />
      </Switch>
    </Router>
  );
}

export default Root;
