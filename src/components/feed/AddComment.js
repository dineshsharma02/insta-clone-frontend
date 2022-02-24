import axios from 'axios';
import React,{useState} from 'react'

const AddComment = (props) => {
  const [credentials, setCredentials] = useState({
    'username':'admin',
    'password':1898,
});
  const [comment, setComment] = useState()
  const id = props.id
  const onChange=(e)=>{
    setComment(e.target.value)
  }
  const handlePostComment=(e)=>{
    e.preventDefault()
    let form_data = new FormData()
    form_data.append('post_id',id)
    form_data.append('comment',comment)
    let url = 'http://127.0.0.1:8000/commentpost/'
    const response = axios.post(url,form_data,{
      headers:{
        'content-type': 'multipart/form-data',
          'Authorization': 'Basic ' + btoa(`${credentials.username}:${credentials.password}`)
      },
    })
    .then(res=>{
      console.log(res.data);

    })
    .catch(err=>console.log(err))

  }

  return (
    <div className="comment-bar">
          <form onSubmit={handlePostComment}>
          <span><input type="text" placeholder='Add a comment' onChange={onChange}/></span>
          <span><input type="submit" /></span>
          </form>
          </div>
  )
}

export default AddComment