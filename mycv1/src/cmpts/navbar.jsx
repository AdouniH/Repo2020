import React, {useRef} from 'react';
import './css/navbar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function NavigationBar() {

  return (

      <div>

      <nav class="navbar navbar-expand-md bg-dark navbar-dark">

          <Link class="navbar-brand pointer" to="/">Navbar</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav blockleft">
                 <li class="nav-item">
                     <Link class="nav-link pointer" to="/home">Home</Link>
                 </li>
                 <li class="nav-item">
                     <Link class="nav-link pointer" to="/cv">CV</Link>
                 </li>
                 <li class="nav-item">
                     <Link class="nav-link pointer" to="/rdv">Rendez vous</Link>
                 </li>
              </ul>
          </div>
      </nav>
      </div>
  );
}

export default NavigationBar;
