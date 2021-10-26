import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LogIn } from "../pages/auth";
import {
  Dashboard,
  Mytask,
  Goals,
  Reporting,
  Inbox,
  Portfolio,
} from "../pages/user";
import PrivateRoute from "./PrivateRoute";

function Root() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route exact path="/login" component={LogIn} />
        <Route path="/mytask" component={Mytask} />
        <Route path="/goals" component={Goals} />
        <Route path="/reporting" component={Reporting} />
        <Route path="/inbox" component={Inbox} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
    </Router>
  );
}

export default Root;
