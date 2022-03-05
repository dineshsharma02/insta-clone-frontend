import React from 'react'
import profpic from "../Utils/prof-image.jpg"
const PostItem = (props) => {
    let {id , image,likes,comment,caption} = props
    console.log(id,likes,caption);
  return (
      
    <div className="post-collage-item">
        <img src={image} alt="not found" width={'250px'} height={'300px'}/>
    </div>
  )
}

export default PostItem