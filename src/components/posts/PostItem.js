import React from 'react'
import profpic from "../Utils/prof-image.jpg"
const PostItem = (props) => {
    let {id , image,likes,comments,caption} = props
    console.log(id,likes,caption);
  return (
      
    <>
    <div className="image-card">
    <img className='post-image' src={image} alt="not found" width={'250px'} height={'300px'}/>
    <div className="likes-card">
      <p>
      <i class="fas fa-heart icons"></i> {likes}
      
      <i class="fas fa-comment icons"></i> {comments}</p>
    </div>
    </div>
    

    {/* <div className="post-collage-item">
        <img src={image} alt="not found" width={'250px'} height={'300px'}/>
    </div> */}
    </>
  )
}

export default PostItem