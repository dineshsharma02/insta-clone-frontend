import React from 'react'
import postimage from './me.jpg';
import { useState,useEffect } from 'react';
import {
  Link, useNavigate
} from "react-router-dom";
import AddComment from './AddComment';

const Feeditem = (props) => {

  let {id,username,image,likes,comments,caption,date} = props
  const [pagelikes, setPageLikes] = useState(likes)
  const [isLiked, setIsLiked] = useState(false)
  let history = useNavigate();

  console.log(image);
  const [userInfo, setUserInfo] = useState({
    'username':'',
    'profileImg':image,
  })

  const [credentials, setCredentials] = useState({
    'username':'admin',
    'password':1898,
});
  
const handleLike=()=>{
  if(!isLiked){
    setPageLikes(likes+1)
    setIsLiked(true)
  }
  else{
    setPageLikes(likes)
    setIsLiked(false)
  }
}


  useEffect(async() => {
    let token = localStorage['authtoken']
    console.log(token);
    if (!token){
      history("/login",{replace:true})
    }
    const response = await fetch("http://127.0.0.1:8000/postimage/",{
            method:"GET",
            headers:{
                "Content-type":"application/json",
                'Authorization': `Bearer ${token}`
            },
            
        });

        const json = await response.json()
        console.log(response.status)
        // console.log(response);
        console.log(json);
        if (response.status===200){
            console.log("Posts fetched");
            // setPosts(json)
            
        }
        else{
            console.log(response);
        }
        
  }, [])
  


  return (
    <div className='post-container'>     
        <div className="username-area">{username}</div>
        <div className="image-area"><img src={image} alt="not found" /></div>
        <div className="post-details-area">
          <div className="post-options">
            <div className="left-options">
            <button className='likebtn' onClick={handleLike}><i class="fa fa-heart" style={{color: (isLiked==true?"red":"white")}}></i></button>
              <i class="fa fa-comment"></i>
              <i class="fa fa-send-o"></i>
            </div>
            <div className="right-options">
            <i class="fa fa-bookmark"></i>
            </div>
          </div>
          <div className="liked-by">
            {pagelikes} <Link to={"post/likes"}>likes</Link>
          </div>
          <div className="caption-box">
            <b>{username}</b> {caption}
          </div>
          <div className="comments">
            View all {comments} comments
          </div>
          <span>{date}</span>
          <AddComment id={id}></AddComment>
        </div>
    </div>
  )
}

export default Feeditem