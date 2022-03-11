import React from 'react'
import { Link } from 'react-router-dom'
import "../css/modal.css"
import Me from "../feed/me.jpg"

const ModalComment = () => {
  return (
      <div className="modal-comment">
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
                <p>This is the comment</p>
                </div>
                <button className='button-follow'>Follow</button>
              </div>

              <div className="modal-body">
                <div className="info">
                <img src={Me} alt="none" width={"25px"} />
                <p>Dinesh.sharma02</p>
                </div>
                <button className='button-follow'>Follow</button>
              </div>
              <div className="modal-body">
                <div className="info">
                <img src={Me} alt="none" width={"25px"} />
                <p>Dinesh.sharma02</p>

                </div>
                <button className='button-follow'>Follow</button>
              </div>
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

export default ModalComment