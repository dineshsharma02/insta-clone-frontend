import React from 'react'
import postimage from './me.jpg';

const Feeditem = () => {
  return (
    <div className='post-container'>
        <div className="username-area">Dinesh.sharma02</div>
        <div className="image-area"><img src={postimage} alt="" /></div>
        <div className="post-details-area">
          <div className="post-options">
            <div className="left-options">
            <i class="fa fa-heart"></i>
              <i class="fa fa-comment"></i>
              <i class="fa fa-send-o"></i>
            </div>
            <div className="right-options">
            <i class="fa fa-bookmark"></i>
            </div>
          </div>
          <div className="liked-by">
            10000likes
          </div>
          <div className="caption-box">
            <b>Dinesh.sharma02</b> here goes the caption of the post
          </div>
          <div className="comments">
            View all 506 comments
          </div>
          <span>8 hours ago</span>
          <div className="comment-bar">
          <span><input type="text" placeholder='Add a comment' /></span>
          <span><input type="submit" /></span>
          </div>
        </div>
    </div>
  )
}

export default Feeditem