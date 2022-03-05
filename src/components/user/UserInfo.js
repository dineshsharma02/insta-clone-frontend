import axios from "axios";
import React,{ useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import Feeditem from "../feed/Feeditem";
import AllPosts from "../posts/AllPosts";

import Me from "../Utils/Me";

const UserInfo = () => {
  let history = useNavigate()
  const [userData, setUserData] = useState([])
  // let [postdata, setPostdata] = useState([])
  // useEffect(()=> {
  //   async function fetchUserInfo(){
  //     // await axios.get('http://127.0.0.1:8000/userposts/1/')
  //     const response = await fetch('http://127.0.0.1:8000/userposts/1/')
  //     .then(res=>{

        
  //       console.log(res.data);
  //       console.log(res.json());
  //       // setUserData(res.data)
  //       // setPostdata((res.data))
  //       // console.log(userData.length);
  //     })
  //     .catch(error=>{
  //       console.log(error);
  //     })
  //   }
  //   fetchUserInfo()
  //   console.log("this is postdata::",userData);
  //       console.log(userData.length);

  
  //   // return () => {
  //   //   second
  //   // }
  // }, [])



  useEffect(async() => {
    let token = localStorage['authtoken']
    console.log(token);
    if (!token){
      history("/login",{replace:true})
    }
    const response = await fetch("http://127.0.0.1:8000/userposts/1/",{
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
            setUserData(json)
            // setPosts(json)
            
        }
        else{
            console.log(response);
        }
        
  }, [])
  
  


  return (
    <div className="main-container">
      <div className="info-section">
        <div className="prof-pic-container">
          <Me></Me>
        </div>
        <div className="user-details">
          {/* <h2>{userData[1].username}</h2> */}
          <div className="user-follow">
            <li>{userData.length} Posts</li>
            <li>55 followers</li>
            <li>83 following</li>
          </div>

          <div className="username-caption-container">
          {/* <h4>{userData[0].username}</h4> */}
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae illo nobis, hic aperiam pariatur omnis perspiciatis natus excepturi aspernatur explicabo unde, saepe quo!</p>
          </div>
          
        </div>
        
      </div>
      
    <div className="line-breaker">
      
    </div>

      <div className="post-section">
        
        <AllPosts></AllPosts>
      </div>
    </div>
  );
};

export default UserInfo;
