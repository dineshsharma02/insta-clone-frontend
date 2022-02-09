import React from 'react';
import './navbar.css';
import {
  Link
} from "react-router-dom";
const Navbar = () => {
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
        <li>User info</li>
        <hr />
          <Link to="login/"><li>Logout</li></Link>
           
          </div>
        </div>
        </div>
      </div>
  </div>
  ) 
  
};

export default Navbar;
