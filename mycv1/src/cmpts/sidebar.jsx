import React from 'react';
import './css/sidebar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Sidebar(props) {

  return (
      <div class="side">
          <div class="row">
            <Link to='/cv/formation' class={"btn b " + props.a }>Formation</Link>
          </div>
          <div class="row">
            <Link to='/cv/experience' class={"btn b " + props.b}>Expérience</Link>
          </div>
          <div class="row">
            <Link to='/cv/skills' class={"btn b " + props.c}>Compétences </Link>
          </div>
      </div>
  );
}

export default Sidebar;
