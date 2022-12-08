import React from "react";
import ChatInfo from "./components/ChatInfo";
import InputContainer from "./components/InputContainer";
import MessagesList from "./components/MessagesList";

const Chat = () => {
  return (
    <div id="chatPage" className="w-full  bg-lightWhite">
      {/* <h1>Chat page </h1> */}
      <div id="chatContainer" className="flex-col">
        <ChatInfo />
        <MessagesList />
        <InputContainer />
      </div>
    </div>
  );
};

export default Chat;
