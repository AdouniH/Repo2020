import React, {useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../App.js"

function PrivateRoute({ component: Component, ...rest }) {
  const a = true;
  const auth = useContext(AuthContext);
  alert(auth)
  return (
    <Route
      {...rest}
      render={props => auth ? (<Component {...props} />) : (<Redirect to="/" />)}
    />
  );
}

export default PrivateRoute;
