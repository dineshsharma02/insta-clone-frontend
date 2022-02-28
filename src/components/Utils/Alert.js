import React from 'react'
import '../css/utils.css'

const Alert = (props) => {
    
  return (
      <>
      {props.message}
      {props.alert && <div className="alert-container">
      <div className="alert info">
      <p className="inner">
              {props.alert.message}
          </p>
         
          {/* <label htmlFor="alert" className='close' title='close'>
          <i class="fas fa-times"></i>
          </label> */}
          
      </div>
  </div>}</>
  )
}

export default Alert