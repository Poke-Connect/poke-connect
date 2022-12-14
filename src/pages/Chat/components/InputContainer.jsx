import React, { useState } from "react";
import { UserChat } from "context/ChatContext";
import { UserAuth } from "context/AuthContext";
import { updateMessagesDb, updateDatesUserChats } from "db/firestore/dbWrites";
import { Timestamp } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import SendIcon from "assets/icons/SendIcon";

const InputContainer = () => {
  const [text, setText] = useState("");

  const { data } = UserChat();
  const { user } = UserAuth();

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  const onSubmitHandler = async () => {
    if (!text) {
      return;
    }
    const message = {
      id: uuidv4(),
      text,
      senderId: user.uid,
      date: Timestamp.now(),
    };
    try {
      await updateMessagesDb(data.chatId, message);
      await updateDatesUserChats(user.uid, data.user.uid, data.chatId);
    } catch (e) {
      console.log("error", e);
    }

    setText("");
  };
  return (
    <div className="bg-darkGray flex flex-row gap-4 fixed left-0 right-0 bottom-0 p-3 items-center">
      <input
        id="input"
        type="text"
        name="input"
        onChange={onChangeHandler}
        value={text}
        placeholder={"Type something to chat"}
        className="flex-auto bg-lightGray p-2 rounded-lg flex-row"
      />
      <button
        className="flex-none p-2 text-lg rounded-lg flex-row"
        disabled={!text}
        onClick={onSubmitHandler}
      >
        <SendIcon />
      </button>
    </div>
  );
};

export default InputContainer;
