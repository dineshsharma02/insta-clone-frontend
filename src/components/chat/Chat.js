import React from "react";
import Prof_pic from "../Utils/Prof_pic";

const Chat = () => {
  return (
    <div className="chat-list-item">
      <div className="profile-pic-container">
        <Prof_pic />
      </div>
      <div className="text-area">
        <h5>Sample</h5>
        <p>Your UX</p>
      </div>
    </div>
  );
};

export default Chat;
