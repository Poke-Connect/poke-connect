import React from "react";
import ChatInfo from "./components/ChatInfo";
import InputContainer from "./components/InputContainer";
import MessagesList from "./components/MessagesList";
import Header from "components/Layout/Header/Header";

const Chat = () => {
  return (
    <div className="flex flex-col fixed w-screen h-full ">
      <div className=" flex h-[10%] ">
        <Header />
      </div>
      <div className=" flex h-[90%] ">
        <div id="chatPage" className="w-full h-full">
          <div id="chatContainer" className="flex-col h-full">
            <ChatInfo />
            <div className="h-[83%] overflow-y-scroll">
              <MessagesList />
            </div>
            <InputContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
