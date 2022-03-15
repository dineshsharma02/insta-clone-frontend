import React, {useEffect} from 'react'
import { Link, useParams, useLocation} from 'react-router-dom'

import "../css/modal.css"
import Me from "../feed/me.jpg"

const Modal = (props) => {
  const id = useParams()
  // const { state } = useLocation.state;
  // console.log(id,state);
  console.log(id.post_id);
  let token = localStorage['authtoken']


  useEffect(async() => {
    const response = await fetch(`http://127.0.0.1:8000/likepost/${id.post_id}`,{
            method:"GET",
            headers:{
                "Content-type":"application/json",
                'Authorization': `Bearer ${token}`
            },
            
        });

        let post_likes = await response.json()
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
              

              
              <div className="modal-body">
                <div className="info">
                <img src={Me} alt="none" width={"25px"} />
                <p>Dinesh.sharma02</p>
                </div>
                <button className='button-follow'>Follow</button>
              </div>



              
          </div>
      </div>
  )
}

export default Modal