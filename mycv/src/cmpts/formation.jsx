import React from 'react';
import Sidebar from './sidebar.jsx';
import { useParams} from "react-router";
import './formation.css';


function Formationcmp() {
  return (
    <div class="formationcmpts">
      Formationcmp
    </div>
  );
}

function Experiencecmp() {
  return (
    <div class="formationcmpts">
      Experiencecmp
    </div>
  );
}

function Competencescmp() {
  return (
    <div class="formationcmpts">
      competencescmp
    </div>
  );
}

function Formation() {
  var params = useParams();
  var section_cmpt

  if (params.section == 'formation'){
      var section_cmpt = <Formationcmp/>
  }

  else if (params.section == 'experience') {
      var section_cmpt = <Experiencecmp/>
  }

  else if (params.section == 'competence') {
      var section_cmpt = <Competencescmp/>
  }

  return (
    <div>
      <div class="formation">
          <div class="left">
              <Sidebar section={params.section}/>
          </div>
          <div class="right">
            {section_cmpt}
          </div>
      </div>
    </div>
  );
}

export default Formation;
