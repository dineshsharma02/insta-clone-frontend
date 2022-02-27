import React from 'react';
import './navbar.css';
import {
  Link, useNavigate
} from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem("authtoken");
    localStorage.removeItem("authrefreshtoken")
    navigate("login/",{replace:true})
  }

  return(
    <div className='navbar'>
      <div className="nav-box">
        <div className="logo-box">InstaGram</div>
        <div className="search-box">
          <input type="search" name="" id="" placeholder='Search'/>
        </div>
        <div className="options-box">
        <Link to="/"><i class="fas fa-home"></i></Link>
        <i class="fas fa-inbox"></i>
        <Link to="newpost/"><i class="fas fa-upload"></i></Link>
        <i class="fas fa-heart"></i>
        <div className="dropdown">
        <i class="fas fa-user"></i>
        <div className="dropdown-content">
        {/* <li></li> */}
        <Link to="/userinfo"><li>User info</li></Link>
        <hr />
          {/* <Link to="login/"><li></li></Link> */}
          <button className='logout-button' onClick={handleLogout} >Logout</button>
           
          </div>
        </div>
        </div>
      </div>
  </div>
  ) 
  
};

export default Navbar;
