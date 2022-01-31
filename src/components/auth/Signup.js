import React from 'react';

import { useState } from 'react';


const Signup = () => {
    const [credential, setCredential] = useState({
        username:"",
        name:"",
        email:"",
        password:"",
        cpassword:"",
    });

    const handleRegister=  async(e)=>{
        e.preventDefault();
        const response = await fetch("http://127.0.0.1:8000/accounts/",{
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify({
                first_name:credential.fullname,
                username:credential.username,
                email:credential.email,
                password:credential.password,
            })
        });
        const json = await response.json()
        console.log(json);


    }

    const onChange=(e)=>{
        setCredential({ ...credential,[e.target.name]:e.target.value});
    }


  return(
  <div>
      <form onSubmit={handleRegister}> 
      <h3>Sign Up!</h3>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" onChange={onChange} />
      <br />
      <br />
      <label htmlFor="fullname">Full Name</label>
      <input type="text" name="username" id="username" onChange={onChange} />
      <br />
      <br />
      <label htmlFor="Name">Username</label>
      <input type="text" name="username" id="username" onChange={onChange} />
      <br />
      <br />
      <label htmlFor="Name">Password</label>
      <input type="text" name="password" id="password" onChange={onChange} />
      <br /><br />
      <input type="submit" value="Register" />
      </form>
      
  </div>
  );
};

export default Signup;
