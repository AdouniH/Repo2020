import React from "react";
import { Route, Redirect } from "react-router-dom";


function PrivateRoute({ component: Component, ...rest }) {
  const a = true;

  return (
    <Route
      {...rest}
      render={props => a ? (<Component {...props} />) : (<Redirect to="/" />)}
    />
  );
}

export default PrivateRoute;
