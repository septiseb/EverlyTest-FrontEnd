import React from "react";
import { Route, Redirect } from "react-router-dom";
import  TokenState  from "../../context/auth/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <TokenState.Consumer>

    {({ token }) => (
      <Route
        {...rest}
        render={(props) =>
          token ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    )}
  </TokenState.Consumer>
);

export default PrivateRoute;
