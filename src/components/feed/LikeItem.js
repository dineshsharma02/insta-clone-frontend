import React from 'react'
import Me from "../feed/me.jpg"
const LikeItem = (props) => {
  return (
    <div className="modal-body">
                    <div className="info">
                    <img src={Me} alt="none" width={"25px"} />
                    <p>{props.username}</p>
                    </div>
                    <button className='button-follow'>Follow</button>
    </div>
  )
}

export default LikeItem