import React from 'react'
import postimage from './me.jpg';
import { useState,useEffect } from 'react';
import {
  Link
} from "react-router-dom";

const Feeditem = (props) => {

  let {username,image,likes,comments,caption,date} = props
  console.log(image);
  const [userInfo, setUserInfo] = useState({
    'username':'',
    'profileImg':image,
  })

  const [credentials, setCredentials] = useState({
    'username':'admin',
    'password':1898,
});
  



  useEffect(async() => {
    const response = await fetch("http://127.0.0.1:8000/postimage/",{
            method:"GET",
            headers:{
                "Content-type":"application/json",
                'Authorization': 'Basic ' + btoa(`${credentials.username}:${credentials.password}`)
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
            <i class="fa fa-heart"></i>
              <i class="fa fa-comment"></i>
              <i class="fa fa-send-o"></i>
            </div>
            <div className="right-options">
            <i class="fa fa-bookmark"></i>
            </div>
          </div>
          <div className="liked-by">
            {likes} <Link to={"post/likes"}>likes</Link>
          </div>
          <div className="caption-box">
            <b>{username}</b> {caption}
          </div>
          <div className="comments">
            View all {comments} comments
          </div>
          <span>{date}</span>
          <div className="comment-bar">
          <span><input type="text" placeholder='Add a comment' /></span>
          <span><input type="submit" /></span>
          </div>
        </div>
    </div>
  )
}

export default Feeditem