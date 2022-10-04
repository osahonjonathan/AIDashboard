import React, { useState } from 'react'
import firebase from './auth/firebase'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const Signin = () => {
    const auth = getAuth(firebase)
    const [inputField, setInputField] = useState({
        email: '',
        password: ''
     
    })

    const onChange = e => {
        e.preventDefault();
        const { name, value } = e.target;

        setInputField(prevState => ({
        ...prevState,
        [name]: value
        }))
    }

    const submitButton = () => {
        console.log(inputField);

        signInWithEmailAndPassword(auth, inputField.email, inputField.password).then((userCredentials) => {
            const user = userCredentials.user;
            console.log("user", user);
          
        })
        .catch((error) => {
            alert(error.message);
         
        })

        
      
      
      
    }

    
    return ( 
        <div >
           <h2>Sign In</h2>
           <label htmlFor="email">Email</label>
           <br />
           <input onChange={onChange} value={inputField.email} type="email" id="email" name="email" />
           <br />
           <label htmlFor="password">password</label>
           <br />
           <input onChange={onChange} value={inputField.password} type="password" id="password" name="password" />
           <br /><br />
           <button onClick={submitButton}>Submit</button>
        </div>
    
    );
}
 
export default Signin;