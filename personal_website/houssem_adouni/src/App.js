import React, {useReducer, useContext} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Home from './cmpts/home';
import Email from './cmpts/email';
import AuthContext from './authcontext'



const initialState = {token: localStorage.getItem('token')};


function reducer(state, action) {
  switch (action.type) {
    case 'get':{
      const tokenKey = localStorage.getItem('token');
      return {token: tokenKey};
    }
    case 'logout':{
      localStorage.removeItem('token');
      return {};
    }
    default:
      throw new Error();
  }
}


function PrivateRoute({ component: Component, ...rest }) {
  const auth = useContext(AuthContext);
  // auth.authdispatch({'type': 'update'});
  return (
    <Route
      {...rest}
      render={props => auth.authState.token ? (<Component {...props} />) : (<Redirect to="/" />)}
    />
  );
}


function App() {
  const [authState, authdispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={ {authState: authState, authdispatch: authdispatch} }>
        <Router>
            <div>
              <Route exact path="/" component={Home} />
              <PrivateRoute exact path="/email/" component={Email} />
            </div>
         </Router>
    </AuthContext.Provider>
    );
  }


export default App;
