import React, {useEffect,useState} from 'react'
import { Link, useParams, useLocation} from 'react-router-dom'
import "../css/modal.css"
import Me from "../feed/me.jpg"
import LikeItem from './LikeItem'
const Likes = () => {
    const id = useParams()
    // const { state } = useLocation.state;
    // console.log(id,state);
    console.log(id.post_id);
    let token = localStorage['authtoken']
    const [likes, setLikes] = useState([])
  
  
    useEffect(async() => {
        const response = await fetch(`http://127.0.0.1:8000/likepost/${id.post_id}`,{
                method:"GET",
                headers:{
                    "Content-type":"application/json",
                    'Authorization': `Bearer ${token}`
                },
                
            });
    
            let post_likes = await response.json()
            setLikes(post_likes)
            console.log(response.status)
            // console.log(response);
            console.log(post_likes);
            if (response.status===200){
                console.log("Posts likes fetched");
                // setPosts(json)
                
            }
            else{
                console.log(response);
            }
      
       
      }, [])
      
    
      return (
          <div className="modal">
              <div className="modal-content">
                  <div className="modal-header">
                      <div className="heading">
                      <h3 className="modal-title">Likes</h3>
                      </div>
                      
                      <Link to="/"><i class="fas fa-times"></i></Link>
                  </div>
                  <br />
                  
    
                  
                    {likes.map((element)=>{
                        return <LikeItem
                        user_id = {element.user_id}
                        post_id = {element.post_id}
                        username = {element.username}
                        />
                    })}

                  
    
    
    
                  
              </div>
          </div>
      )
}

export default Likes