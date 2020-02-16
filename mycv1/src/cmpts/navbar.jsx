import React, {useRef} from 'react';
import './css/navbar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function NavigationBar(props) {

  var cv_css = '';
  var home_css = '';
  var rdv_css = '';
  var selected = props.page

  if (selected === 'cv'){
    cv_css = "selected"
  }

  else if (selected === 'home') {
    home_css = "selected"
  }

  else if (selected === 'rdv'){
    rdv_css = "selected"
  }

  return (
      <div>
        <nav class="navbar navbar-expand-md bg-dark navbar-dark">
            <Link class="navbar-brand pointer " to="/">Houssem ADOUNI</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav blockleft">
                   <li class="nav-item">
                       <Link class={"nav-link pointer " + home_css} to="/">Home</Link>
                   </li>
                   <li class="nav-item">

                       <Link class={"nav-link pointer " + cv_css} to="/cv">CV</Link>
                   </li>
                   <li class="nav-item">
                       <Link class={"nav-link pointer " + rdv_css} to="/rdv">Rendez vous</Link>
                   </li>
                </ul>
            </div>
        </nav>
      </div>
  );
}

export default NavigationBar;
