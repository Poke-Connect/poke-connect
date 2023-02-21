import React, {
  useContext,
  createContext,
  useReducer,
  useEffect,
  FC,
} from "react";

interface IProps {
  children?: React.ReactNode;
}

interface ChatContextInterface {
  data: any | null;
  dispatch: any;
}

const chatContextDefaults: ChatContextInterface = {
  data: null,
  dispatch: null,
};

const ChatContext = createContext<ChatContextInterface>(chatContextDefaults);

export const ChatContextProvider: FC<IProps> = ({ children }) => {
  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER_CHAT":
        return {
          user: action.payload.user,
          chatId: action.payload.chatId,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE, () => {
    const localData = localStorage.getItem("state");
    if (!localData || localData === "undefined") {
      return INITIAL_STATE;
    } else {
      return JSON.parse(localData);
    }
  });

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

export const UserChat = () => {
  return useContext(ChatContext);
};
