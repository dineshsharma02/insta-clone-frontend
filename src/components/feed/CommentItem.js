import React from 'react'
import { Link } from 'react-router-dom'
import "../css/modal.css"
import Me from "../feed/me.jpg"

const CommentItem = (props) => {



  return (
    <div className="modal-body">
        <div className="info">
        <img src={Me} alt="none" width={"25px"} />
        <p>Dinesh.sharma02</p>
        <br/>
        <p>{props.comment}</p>
        </div>
        <button className='button-follow'>Follow</button>
    </div>
  )
}

export default CommentItem