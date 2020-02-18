import React from 'react';
import NavigationBar from './navbar.jsx' ;
import Sidebar from './sidebar.jsx' ;
import './css/cv.css';
import ensg from './img/ensg.png';


function Formation() {
  // <div class="embed-responsive embed-responsive-16by9 ifr">
  //     <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/lswH8Q0RZ4Q"></iframe>
  // </div>
  // <img class="img-responsive" src={ensg} alt="Chania" width="460" height="345"> </img>
  return (
    <div class="row">
        <div class="col-sm-3">
          <img class="img-responsive ensgimg" src={ensg} alt="Chania"/>
        </div>

        <div class="col-sm-9 tst2">
            <h4 class="center">Diplôme d'Ingénieur en Géomatique</h4>
            <h4 class="center">de l'Ecole Nationale des Sciences Géographiques (ENSG)</h4>
        </div>
    </div>
  );
}


function CvFormation() {

  return (
      <div>
        <NavigationBar page='cv'/>
        <div class="row">
              <div class="col-sm-3">
                  <Sidebar a="btn-success" b="btn-light" c="btn-light"/>
              </div>
              <div class="col-sm-9 main">
                <Formation />
              </div>
        </div>
      </div>
  );
}

function CvExperience() {

  return (
      <div>
        <NavigationBar page='cv'/>
        <div class="row">
              <div class="col-sm-3">
                  <Sidebar  a="btn-light" b="btn-success" c="btn-light"/>
              </div>
              <div class="col-sm-9">
                  Experience
              </div>
        </div>
      </div>
  );
}
function CvSkills() {

  return (
      <div>
        <NavigationBar page='cv'/>
        <div class="row">
              <div class="col-sm-3">
                  <Sidebar a="btn-light" b="btn-light" c="btn-success"/>
              </div>
              <div class="col-sm-9">
                Skills
              </div>
        </div>
      </div>
  );
}
export {CvSkills, CvExperience, CvFormation};
