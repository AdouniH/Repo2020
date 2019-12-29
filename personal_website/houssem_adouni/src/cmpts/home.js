
import React, {useState, useContext, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import axios from 'axios';
import AuthContext from '../authcontext'

function Home() {

    let history = useHistory();
    const auth = useContext(AuthContext);
    // alert(JSON.stringify(auth.authState))
    if (auth.authState.token){
        // alert(JSON.stringify(auth.authState))
        history.push("/email");
    }

    const [code, setCode] = useState('');
    // =====> Functions
    const myChangeHandler = (e) => {
        setCode(e.target.value)
    }
    useEffect(() => {
    }, [auth]);
    const login = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/code/', {'code': code})
        .then(res => {
              if (res.data.token){
                  localStorage.setItem('token', res.data.token);
                  auth.authdispatch({'type': 'get'});
                  history.push("/email");
              }
              else {
                  alert('code does not exits')
              }
        })
}
    return (
            <div>
              <form>
                <input type='text' name='code' onChange={myChangeHandler}/>
                <button type="submit" onClick={login}>Login</button>
              </form>
            </div>
    );
  }

export default Home;
