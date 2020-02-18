import React from 'react';
import './App.css';
import Home from './cmpts/home.jsx';
import {CvSkills, CvExperience, CvFormation} from './cmpts/cv.jsx';
import Rdv from './cmpts/rdv.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  document.title = "Houssem ADOUNI"
  return (
      <div>
          <Router>
                  <meta charset="utf-8"></meta>
                  <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"></link>
                  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
                <div>
                  <Switch>
                      <Route exact path="/" children={<Home/>} />
                      <Route exact path="/cv/formation" children={<CvFormation/>} />
                      <Route exact path="/cv/experience" children={<CvExperience/>} />
                      <Route exact path="/cv/skills" children={<CvSkills/>} />
                      <Route exact path="/rdv" children={<Rdv/>} />
                  </Switch>
                </div>
          </Router>
      </div>
  );
}

export default App;
