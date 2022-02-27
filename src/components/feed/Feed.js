import React from 'react';
import '../css/feed.css';
import Feeditem from './Feeditem';
import { Link ,useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react';
const Feed = () => {
  
  const [posts, setPosts] = useState([])
  let history = useNavigate();
  
  



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
            setPosts(json)
            
        }
        else if(response.status===401){
          history("/login",{replace:true})
        }

        else{
            console.log(response);
        }
  
        
  }, [])




  return(
    <div className='feed-posts'>
      {posts.map((element)=>{
        return <Feeditem 
        id = {element.id}
        username = {element.username}
        image = {element.image}
        likes = {element.total_likes}
        comments = {element.total_comments}
        caption = {element.caption}
        date = {element.created_at}

        />
      })}
    </div>
  )
};

export default Feed;
