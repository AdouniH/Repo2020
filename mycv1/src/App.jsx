import React from 'react';
import './App.css';
import NavigationBar from './cmpts/navbar.jsx' ;
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
              <NavigationBar/>
            </div>
      </Router>
      </div>
  );
}

export default App;
