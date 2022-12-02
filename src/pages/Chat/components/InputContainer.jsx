import React, { useState } from "react";
import { UserChat } from "context/ChatContext";
import { UserAuth } from "context/AuthContext";
import { updateMessagesDb, updateDatesUserChats } from "db/firestore/dbWrites";
import { Timestamp } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

const InputContainer = () => {
  const [text, setText] = useState("");

  const { data } = UserChat();
  const { user } = UserAuth();

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  const onSubmitHandler = async () => {
    const message = {
      id: uuidv4(),
      text,
      senderId: user.uid,
      date: Timestamp.now(),
    };
    await updateMessagesDb(data.chatId, message);
    await updateDatesUserChats(user.uid, data.user.uid, data.chatId);
    setText("");
  };

  return (
    <div className="bg-darkGray flex-row justify-start">
      <input
        id="input"
        type="text"
        name="input"
        onChange={onChangeHandler}
        value={text}
        placeholder={"Type something to chat"}
        className="flex-3 bg-lightGray p-2 text-sm rounded-lg flex-row"
      />
      <button
        className="flex-3 bg-primary p-2 text-lg rounded-lg flex-row"
        onClick={onSubmitHandler}
      >
        Send
      </button>
    </div>
  );
};

export default InputContainer;
