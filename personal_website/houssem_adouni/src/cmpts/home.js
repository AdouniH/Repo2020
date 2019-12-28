
import React, {useState} from 'react';
import {Redirect, useHistory} from "react-router-dom";
import axios from 'axios';


function Home() {
    const [code, setCode] = useState('');
    let history = useHistory();

    const myChangeHandler = (e) => {
        setCode(e.target.value)
    }

    const login = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/code/', {'code': code})
        .then(res => {
            console.log(res);
            console.log(res.data);
        })

        alert(code)
        history.push("/email");
}

    return (
            <div>
              <form>
                <input type='text' name='code' onChange={myChangeHandler}/>
                <button type="submit" onClick={login}>Click Me!</button>
              </form>
            </div>



    );
  }

export default Home;
