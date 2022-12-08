import React from "react";
import ChatInfo from "./components/ChatInfo";
import InputContainer from "./components/InputContainer";
import MessagesList from "./components/MessagesList";
import Header from "components/Layout/Header/Header";

const Chat = () => {
  return (
    <div className="flex flex-col fixed w-screen h-screen ">
      <div className=" flex h-[10%] ">
        <Header />
      </div>
      <div className=" flex h-[90%] ">
        <div id="chatPage" className="w-full">
          <div id="chatContainer" className="flex-col">
            <ChatInfo />
            <MessagesList />
            <InputContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
