import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const NewPost = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');
  const [credentials, setCredentials] = useState({
    'username':'admin',
    'password':1898,
});
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("This is onsubmit");
    let form_data = new FormData();
    console.log(image,image.name,caption);
    form_data.append('image', image, image.name);
    form_data.append('caption', caption);
    let url = 'http://127.0.0.1:8000/postimage/'
    axios.post(url,form_data,{
      headers:{
        'content-type': 'multipart/form-data',
        'Authorization': 'Basic ' + btoa(`${credentials.username}:${credentials.password}`)
    },
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err))
  

  }
  const onChange=(e)=>{
    setCaption(e.target.value)
    console.log(e.target.id,"=",e.target.value);
    console.log(caption);
  }

  const handleImageChange = (e) => {
    console.log("its image change");
    
    setImage(e.target.files[0])
    console.log(image);
  };
  return <div>
    <h3>Post New Photo here</h3>
    <form onSubmit={handleSubmit}>
      
    <input type="file" name="image" id="image" onChange={handleImageChange}/>
    <input type="text" name="caption" id="caption" onChange={onChange}/>
    <input type="submit" value="Post" />
    </form>
  </div>;

};

export default NewPost;
