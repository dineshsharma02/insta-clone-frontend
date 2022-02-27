import React,{useEffect} from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link ,useNavigate} from 'react-router-dom'
import "../css/modal.css"
import Me from "../feed/me.jpg"

import Done from "../Utils/Done"




const NewPost = () => {
  const [loading, setLoading] = useState(false)
  let history = useNavigate();
  let token = localStorage['authtoken']
  useEffect(() => {
    
  console.log(token);
  
  if(!token){
    history(
      "/login"
    )
  }
  
    
  }, [])
  
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
    const response  =  axios.post(url,form_data,{
        headers:{
          'content-type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
      },
      })

    
    .then(res => {
      console.log(res.data);
      console.log("photo uploaded");
      // showGif()
      history("/",{replace:true})
      
      
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

  const showGif=()=>{
    <Done></Done>
    
  }



  return( 
  
  <>

  <div className="modal">
          <div className="modal-content">
              <div className="modal-header">
                  <div className="heading">
                  <h3 className="modal-title">Create New Post</h3>
                  </div>
                  
                  <Link to="/"><i class="fas fa-times"></i></Link>
              </div>
              <br />
              <div className="modal-body newpost">
              <i class="fas fa-images upload-image"></i>
              <br/>
              <form onSubmit={handleSubmit}>

                <input className='button-upload' type="file" name="image" id="image" onChange={handleImageChange}/>
                <input class="caption-input" type="text" name="caption" id="caption" onChange={onChange} placeholder="Write a caption..."/>
                <br/>
                <br/>
                <input className='button-follow' type="submit" value="Post" />
                </form>
              </div>

              



              
          </div>
      </div>
      
      {/* <Done></Done>  */}
  </>


  





  )};

export default NewPost;
