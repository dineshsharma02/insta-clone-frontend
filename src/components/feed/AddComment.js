import axios from 'axios';
import React,{useState} from 'react'

const AddComment = (props) => {
  let token = localStorage['authtoken']
  
  const [comment, setComment] = useState()
  const [val, setVal] = useState('')
  const id = props.id
  const onChange=(e)=>{
    setComment(e.target.value)
    setVal(e.target.value)
  }
  const handlePostComment=async(e)=>{
    e.preventDefault()
    console.log("posting comment");
    console.log(id);
    const response = await fetch(`http://127.0.0.1:8000/commentpost/${id}/`,{
            method:"POST",
            headers:{
                "Content-type":"application/json",
                'Authorization': `Bearer ${token}`
            },
            body:JSON.stringify({
              "comment":`${comment}`
            })
             
        });
        console.log(id);

        const json = await response.json()
        console.log(response.status)
        // console.log(response);
        console.log(json);
        if (response.status===201){
          console.log("Commented on the post");
          setVal('')
        }
        else{
          console.log(json);

        }

  }

  return (
    <div className="comment-bar">
          <form onSubmit={handlePostComment} id = "comment-form" className="inline-form">
          <span><input type="text" placeholder='Add a comment' onChange={onChange} value={val}/></span>
          <span><input disabled={val?false:true} className='btn-comment' type="submit" value="Post" /></span>
          </form>
          </div>
  )
}

export default AddComment