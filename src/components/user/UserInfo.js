import React from "react";
import Me from "../Utils/Me";

const UserInfo = () => {
  return (
    <div className="main-container">
      <div className="info-section">
        <div className="prof-pic-container">
          <Me></Me>
        </div>
        <div className="user-details">
          <h2>dinesh.sharma02</h2>
          <div className="user-follow">
            <li>3 Posts</li>
            <li>55 followers</li>
            <li>83 following</li>
          </div>

          <div className="username-caption-container">
          <h4>Dinesh Sharma</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae illo nobis, hic aperiam pariatur omnis perspiciatis natus excepturi aspernatur explicabo unde, saepe quo!</p>
          </div>
          
        </div>
        
      </div>
      
    <div className="line-breaker">
      
    </div>

      <div className="post-section">
        <Me></Me>
        <Me></Me>
        <Me></Me>
      </div>
    </div>
  );
};

export default UserInfo;
