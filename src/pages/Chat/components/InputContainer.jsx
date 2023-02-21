import React, { useState } from "react";
import { createNewMessage } from "dbNew/dbWrites";
import SendIcon from "assets/icons/SendIcon";
import { updateConnectionData } from "dbNew/dbUpdate";

const InputContainer = (props) => {
  const { connectionId, selfId, socket, otherUserId, messages, setMessages } =
    props;

  const [text, setText] = useState("");

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  const onSubmitHandler = async () => {
    if (!text) {
      return;
    }
    const messageData = {
      text,
      connectionId,
      senderId: selfId,
    };
    try {
      const messageId = await createNewMessage(messageData);
      await updateConnectionData(connectionId, text, selfId);
      socket.emit(
        "send-message",
        { ...messageData, _id: messageId },
        otherUserId
      );
      setMessages([...messages, { ...messageData, _id: messageId }]);
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
