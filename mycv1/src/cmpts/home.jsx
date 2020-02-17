import React, {useState} from 'react';
import NavigationBar from './navbar.jsx' ;
import './css/home.css';

function Home() {

  const [code, setCode] = useState("");

  function codeChanged(event){
      setCode(event.target.value);
  }

  function submittion(event){
      event.preventDefault();
      alert(code)
  }

  return (
    <body>
      <div>
          <NavigationBar page='home'/>
          <div class='center'>
          <div class="container">
              <form onSubmit={submittion}>
              <div class="form-group">

                <div class="b">
                    <label for="usr">Veuillez entrer votre code</label>
                </div>
                <div class="b">
                    <input onChange={codeChanged} type="text" class="form-control" id="code"></input>
                </div>
                <div class="b">
                    <button type="submit" class="btn btn-success bouton">Valider</button>
                </div>

              </div>
              </form>
              </div>
          </div>
      </div>
    </body>
  );
}

export default Home;
