import React, { useState } from "react";
import { createNewMessage } from "db/dbWrites";
import SendIcon from "assets/icons/SendIcon";
import { updateConnectionData } from "db/dbUpdate";
import { Socket } from "context/SocketContext";

const InputContainer = (props) => {
  const { connectionId, selfId, otherUserId, messages, setMessages } = props;
  const [text, setText] = useState("");
  const socket = Socket();

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
      if (socket) {
        const messageId = await createNewMessage(messageData);
        await updateConnectionData(connectionId, text, selfId);
        socket.emit(
          "send-message",
          { ...messageData, _id: messageId },
          otherUserId
        );
        setMessages([...messages, { ...messageData, _id: messageId }]);
      } else {
        console.log("error");
      }
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
