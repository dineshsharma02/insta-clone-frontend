import React from 'react';
import {
    Link
  } from "react-router-dom";

import { useState } from 'react';

const Login = () => {
    // const make_base_auth=(user, password)=> {
    //     var tok = user + ':' + password;
    //     var hash = Base64.encode(tok);
    //     return "Basic " + hash;
    //   }

    const [credentials, setCredentials] = useState({
        'username':'abc',
        'password':'abc',
    });

    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
        console.log(e.target.name,e.target.value);
    }

    const handleLogin=async(e)=>{
        e.preventDefault();
        console.log(credentials.username,credentials.password);
        const response = await fetch("http://127.0.0.1:8000/accounts/login/",{
            method:"GET",
            headers:{
                "Content-type":"application/json",
                'Authorization': 'Basic ' + btoa(`${credentials.username}:${credentials.password}`)
            },
            
        });

        const json = await response.json()
        console.log(response.status)
        console.log(json);
        if (response.status===200){
            console.log("User Logged in");
            
        }
        else{
            console.log(response);
        }
    }
  return (
  <div>
      <Link to="/signup">Sign Up here!</Link>
      <h3>Login</h3>
      <form method="get" onSubmit={handleLogin}>
      <input type="text" name="username" id="" onChange={onChange} />
      <br /><br />
      <input type="text" name="password" id="" onChange={onChange} />
      <input type="submit" value="Submit" />
      </form>
  </div>
  );
};

export default Login;
