import React from 'react';
import './navbar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul class="topnav">
        <li><Link to="/mycv/formation">Mon CV</Link></li>
        <li><Link to="/">Home</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
