import React from 'react';

import { useState } from 'react';


const Signup = () => {
    const [credential, setCredential] = useState({
        username:"",
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        cpassword:"",
    });

    const handleRegister=  async(e)=>{
        e.preventDefault();
        const response = await fetch("http://127.0.0.1:8000/accounts/register/",{
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify({
                first_name:credential.first_name,
                last_name:credential.last_name,
                username:credential.username,
                email:credential.email,
                password:credential.password,
                password2:credential.cpassword
            })
        });
        const json = await response.json()
        console.log(response.status)
        console.log(json);
        if (response.status===201){
            console.log("User created");
        }
        else{
            console.log(response);
        }



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
      <label htmlFor="fullname">First Name</label>
      <input type="text" name="first_name" id="first_name" onChange={onChange} />
      <br />
      <br />
      <label htmlFor="fullname">Last Name</label>
      <input type="text" name="last_name" id="last_name" onChange={onChange} />
      <br />
      <br />
      <label htmlFor="Name">Username</label>
      <input type="text" name="username" id="username" onChange={onChange} />
      <br />
      <br />
      <label htmlFor="Name">Password</label>
      <input type="text" name="password" id="password" onChange={onChange} />
      <br /><br />
      <label htmlFor="Name">Confirm Password</label>
      <input type="text" name="cpassword" id="cpassword" onChange={onChange} />
      <br /><br />
      <input type="submit" value="Register" />
      </form>
      
  </div>
  );
};

export default Signup;
