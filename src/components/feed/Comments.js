import React, {useEffect,useState}from 'react'
import { Link, useParams } from 'react-router-dom'
import "../css/modal.css"
import Me from "../feed/me.jpg"
import CommentItem from './CommentItem'

const Comments = () => {

    const id = useParams()
    // const { state } = useLocation.state;
    // console.log(id,state);
    console.log(id.post_id);
    let token = localStorage['authtoken']
    const [comments, setComments] = useState([])
  
  
    useEffect(async() => {
        const response = await fetch(`http://127.0.0.1:8000/commentpost/${id.post_id}/`,{
                method:"GET",
                headers:{
                    "Content-type":"application/json",
                    'Authorization': `Bearer ${token}`
                },
                
            });
    
            let post_comments = await response.json()
            setComments(post_comments)
            console.log(response.status)
            // console.log(response);
            console.log(post_comments);
            if (response.status===200){
                console.log("Posts comments fetched");
                // setPosts(json)
                
            }
            else{
                console.log(response);
            }
      
       
      }, [])


    return (
        <div className="modal-comment">
            <div className="modal-content">
                <div className="modal-header">
                    <div className="heading">
                    <h3 className="modal-title">Comments</h3>
                    </div>
                    
                    <Link to="/"><i class="fas fa-times"></i></Link>
                </div>
                <br />
                
  
                
                {comments.map((element)=>{
                        return <CommentItem
                        comment = {element.comment}
                        time = {element.created_at}
                        post_id = {element.post_id}
                        />
                    })}
  
  
  
                
            </div>
        </div>
    )
}

export default Comments