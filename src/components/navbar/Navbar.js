import React from 'react';
import './navbar.css';
const Navbar = () => {
  return(
    <div className='navbar'>
      <div className="nav-box">
        <div className="logo-box">InstaGram</div>
        <div className="search-box">
          <input type="search" name="" id="" placeholder='Search'/>
        </div>
        <div className="options-box">
        <i class="fas fa-home"></i>
        <i class="fas fa-inbox"></i>
        <i class="fas fa-upload"></i>
        <i class="fas fa-heart"></i>
        <i class="fas fa-home"></i>
        <i><img src=" " alt="" /></i>
        </div>
      </div>
  </div>
  ) 
  
};

export default Navbar;
