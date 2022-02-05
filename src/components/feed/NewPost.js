import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const NewPost = () => {
  // const [image, setImage] = useState(null);
  const [state, setState] = useState({
    caption: '',
    image: null
  });
  const [credentials, setCredentials] = useState({
    'username':'admin',
    'password':1898,
});
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("This is onsubmit");
    console.log(state);
    let form_data = new FormData();
    form_data.append('image', state.image, state.image.name);
    form_data.append('caption', state.caption);
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
    setState({
      caption:e.target.value
      
    })
    console.log(e.target.id,"=",e.target.value);
    console.log(state.caption);
  }

  const handleImageChange = (e) => {
    console.log("its image change");
    setState({
      image:e.target.files[0]
    })
    console.log(state.image);
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
