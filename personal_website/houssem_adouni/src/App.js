import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import AuthPage from './cmpts/authpage';
import PrivateRoute from './cmpts/private_root'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <Router>
            <div>
              <Route exact path="/" component={AuthPage} />
              <PrivateRoute exact path="/admin" component={Admin} />
            </div>
         </Router>
    );
  }
}

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
            <div>
              Admin
            </div>
    );
  }
}


export default App;
