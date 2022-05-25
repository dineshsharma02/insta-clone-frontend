import React from "react";
import Prof_pic from "../Utils/Prof_pic";
import Chat from "./Chat";
import Message from "./Message";
import MessageReceve from "./MessageReceve";

const ChatHome = () => {
  const username = localStorage.getItem("username");
  return (
<>
    <div className="message-home">
      <div className="top-message-navbar">
        Hii there i am dinesh anf this is nav area
      </div>
      <div className="main-message-area">
        
        <div className="left-chat-list">
          
          <Chat/>
          <Chat/>
          <Chat/>
          <Chat/>
          <Chat/>
          <Chat/>
          <Chat/>
          <Chat/>
          <Chat/>
          <Chat/>
          <Chat/>
          <Chat/>
          <Chat/>
          <Chat/>
          
        </div>
        <div className="right-full-chat">
          <div className="profile-top-bar">
            <div className="profile-pic-container">
              <Prof_pic/>
            </div>
            <h4>Dinesh sharma</h4>
          </div>
          <div className="all-messages-area">
          <Message/>
          <MessageReceve/>
          <Message/>
          <Message/>
          <MessageReceve/>

          <Message/>
          </div>
          
        </div>
      </div>
    </div>

    </>
  );
};

export default ChatHome;
