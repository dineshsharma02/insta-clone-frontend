import React from 'react'
import postimage from './me.jpg';
import { useState,useEffect } from 'react';
import {
  Link, useNavigate
} from "react-router-dom";
import AddComment from './AddComment';
import Moment from 'react-moment';

const Feeditem = (props) => {

  let {id,username,image,likes,comments,caption,date} = props
  const [pagelikes, setPageLikes] = useState(likes)
  const [isLiked, setIsLiked] = useState(false)
  let history = useNavigate();
  let token = localStorage['authtoken']
    console.log(token);
    if (!token){
      history("/login",{replace:true})
    }

  console.log(image);
  const [userInfo, setUserInfo] = useState({
    'username':'',
    'profileImg':image,
  })

  const [credentials, setCredentials] = useState({
    'username':'admin',
    'password':1898,
});
  
const handleLike=async(e)=>{
  if(!isLiked){
    
    const response = await fetch("http://127.0.0.1:8000/likepost/",{
            method:"POST",
            headers:{
                "Content-type":"application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              "post_id": `${id}`
            }),
            
            
        });
        console.log(id);

        const json = await response.json()
        console.log(response.status)
        // console.log(response);
        console.log(json);
        if (response.status===201){
            console.log(`Post like by user_id =1 and post_id =  ${id}`);
            // setPosts(json)
            setPageLikes(likes+1)
            setIsLiked(true)
        }
        else{
            console.log(response);
        }


    
  }
  else{
    // setPageLikes(likes)
    const response = await fetch(`http://127.0.0.1:8000/delpostlike/${id}/`,{
            method:"DELETE",
            headers:{
                "Content-type":"application/json",
                'Authorization': `Bearer ${token}`
            },
             
        });
        console.log(id);

        const json = await response.json()
        console.log(response.status)
        // console.log(response);
        console.log(json);
        if (response.status===202){
            // setPosts(json)
            setPageLikes(likes-1)
            setIsLiked(false)
        }
        else{
            console.log(response);
        }




    setIsLiked(false)
  }
}


  useEffect(async() => {
    
    const response = await fetch("http://127.0.0.1:8000/postimage/",{
            method:"GET",
            headers:{
                "Content-type":"application/json",
                'Authorization': `Bearer ${token}`
            },
            
        });

        let json = await response.json()
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
    
    const like = await fetch(`http://127.0.0.1:8000/isLiked/${id}/`,{
      method:"GET",
      headers:{
          "Content-type":"application/json",
          'Authorization': `Bearer ${token}`
      },
    });
    
    if (like.status===200){
        console.log("Liked");
        setIsLiked(true)
        // setPosts(json)
        
    }
    else{
        console.log("Not Liked");
        setIsLiked(false)
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
              <Link to={`post/comments/${id}`}><i class="fa fa-comment"></i></Link>
              <i class="fa fa-send-o"></i>
            </div>
            <div className="right-options">
            <i class="fa fa-bookmark"></i>
            </div>
          </div>
          <div className="liked-by">
            {pagelikes} <Link to={{
              pathname:`post/likes/${id}`,
              state:{ stateParam:true }
              }}>likes</Link>
              
          </div>
          <div className="caption-box">
            <b>{username}</b> {caption}
          </div>
          <div className="comments">
            View all {comments} <Link to={`post/comments/${id}`}>comments</Link>
          </div>
          <Moment fromNow>{date}</Moment>
          {/* <span>{date}</span> */}
          <AddComment id={id}></AddComment>
        </div>
    </div>
  )
}

export default Feeditem