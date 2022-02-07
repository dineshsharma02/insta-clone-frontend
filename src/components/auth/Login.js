import React from 'react';
import {
    Link
  } from "react-router-dom";

import { useState } from 'react';
import './style.css';

const Login = () => {
    

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
  <div className='container'>
      <div className="left-container">
          
      </div>
      
      <div className="right-container">
      <h3>Login</h3>
      <form method="get" onSubmit={handleLogin}>
        <div className="form-container">
        <input type="text" name="username" id="" onChange={onChange} placeholder="Username" />
        
        <input type="text" name="password" id="" onChange={onChange} placeholder="Password" />
        
        <input class="btn" type="submit" value="Login" />
        </div>
      </form>
      
      <div className="options">
      <p>Don't have an account?<Link className='link' to="/signup"> Sign up</Link></p>
      <Link className='link' to="/signup">Forgot Password?</Link>
      </div>
      </div>
      
  </div>
  );
};

export default Login;
