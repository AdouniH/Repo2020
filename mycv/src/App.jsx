import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './cmpts/navbar.jsx';
import Sidebar from './cmpts/sidebar.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (

    <div>

      <Router>
        <Navbar/>
        <Switch>
              <Route exact path="/mycv/:section" component={Sidebar}/>
              <Route exact path="/">  Home  </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
