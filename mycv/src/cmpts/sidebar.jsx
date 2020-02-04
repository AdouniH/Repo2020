import React from 'react';
import './sidebar.css';
import { useParams} from "react-router";
import {Link} from "react-router-dom";

function Sidebar(props) {
  var normal_style = {};
  var selected_style = {
            backgroundColor: '#4CAF50',
            color: 'white'
        };

  let { section } = useParams();
  var formation_style;
  var exp_style;
  var skills_style;
  if (section=='formation'){
    formation_style = selected_style;
    exp_style = normal_style;
    skills_style = normal_style;
  }
  else if (section=='experience') {
    formation_style = normal_style;
    exp_style = selected_style;
    skills_style = normal_style;
  }
  else if (section=='competence') {
    formation_style = normal_style;
    exp_style = normal_style;
    skills_style = selected_style;
  }

  return (
    <div>
      <Link to="/mycv/formation"><button class="button button1" style={formation_style}>Formation</button></Link>
      <Link to="/mycv/experience"><button class="button button1" style={exp_style}>Experience</button></Link>
      <Link to="/mycv/competence"><button class="button button1" style={skills_style}>Compétence</button></Link>
    </div>
  );
}


function Formation() {
  return (
    <div>
      Formation
    </div>
  );
}

function Experience() {
  return (
    <div>
      Experience
    </div>
  );
}

function Competence() {
  return (
    <div>
      Competence
    </div>
  );
}


export default Sidebar;
