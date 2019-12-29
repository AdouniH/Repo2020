import React, {useContext, useState} from 'react';
import AuthContext from '../authcontext'
import axios from 'axios';

function Email() {
    const auth = useContext(AuthContext);
    const [email, setEmail] = useState('')

    const logout = () => {
        auth.authdispatch({'type': 'logout'});
    }

    const myChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    const validate = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/email/',  {
        "email": email,
        "sender": "to add later"
    })
        .then(res => {
                  alert('Sent');
        })
        // alert(email);
    }

    return (
            <div>
              <ul>
                  <li><a href="" onClick={logout}>Logout</a></li>
              </ul>
              Email

              <form >
                   <input
                     type='text'
                     name='email'
                     onChange={myChangeHandler}
                   />
                   <input type='submit' onClick={validate}/>
               </form>
            </div>
    );
  }

export default Email;
