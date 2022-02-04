import React from 'react';
import { useState } from 'react';

const NewPost = () => {
  const [image, setImage] = useState("");
  const [credentials, setCredentials] = useState({
    'username':'admin',
    'password':'1898',
});
  const handleSubmit=async(e)=>{
    e.preventDefault()
    
    const response = await fetch("http://127.0.0.1:8000/postimage/",{
            mode:'cors',
            method:"POST",
            headers:{
                "Content-type":"application/json",
                'Authorization': 'Basic ' + btoa(`${credentials.username}:${credentials.password}`)
            },
            body:{
              'image':image
            },
            
        });

        const json = await response.json()
        console.log(response.status)
        console.log(json);
        if (response.status===201){
            console.log("User Logged in");
            
        }
        else{
            console.log(response);
        }

  }
  const onChange=(e)=>{
    setImage(e.value)
  }
  return <div>
    <h3>Post New Photo here</h3>
    <form onSubmit={handleSubmit}>
    <input type="file" name="image" id="" onChange={onChange}/>
    <input type="submit" value="Post" />
    </form>
  </div>;

};

export default NewPost;
