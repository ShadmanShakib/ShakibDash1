import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../hooks";

function PrivateRoute({ component: Component, ...rest }: any) {
  const { authenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}

export default PrivateRoute;
