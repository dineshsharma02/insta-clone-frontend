import React from 'react';
import {
    Link, useNavigate
  } from "react-router-dom";

import { useState } from 'react';
import '../css/style.css';

const Login = (props) => {
    let history = useNavigate();

    const [credentials, setCredentials] = useState({
        'username':'',
        'password':'',
    });

    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
        console.log(e.target.name,e.target.value);
    }

    const handleLogin=async(e)=>{
        e.preventDefault();
        console.log(credentials.username,credentials.password);
        let token = localStorage.getItem['token']
        // if (token){
        //     this.props.history.push('/')
        // }
        const response = await fetch("http://127.0.0.1:8000/api/token/",{
            method:"POST",
            headers:{
                "Content-type":"application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                "username":`${credentials.username}`,
                "password":`${credentials.password}`
            })
            
        });

        const json = await response.json()
        console.log(response.status)
        console.log(json);
        if (response.status===200){
            history("/",{replace:true})
            console.log("User Logged in");
            console.log(response);
            window.localStorage.setItem("authtoken",json['access'])
            window.localStorage.setItem("authrefreshtoken",json['refresh'])
            window.localStorage.setItem("username",credentials.username)
            const token = localStorage.getItem("auth-token")
            const refresh = localStorage.getItem("auth-refreshtoken")
            console.log(token,refresh);
        }
        else{
            console.log(response);
            alert(response.statusText=="Unauthorized"?"Invalid credentials":response.statusText)
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
        
        <button disabled={credentials.username=="" || credentials.password==""} class="btn login-btn" type="submit">Login</button>
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
