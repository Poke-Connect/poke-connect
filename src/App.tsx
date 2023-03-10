import React, { useState, FC } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { ChatContextProvider } from "context/ChatContext";
import Loading from "./pages/Loading";
import { ToastContainer } from "react-toastify";
import { SocketProvider } from "context/SocketContext";
import { useAppAuth } from "customHooks";
import { LibraryType } from "types";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { AppRouter } from "AppRouter";

const App: FC = () => {
  const [libraries] = useState<LibraryType[]>(["places"]);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_POKE_GOOGLE_MAPS_API_KEY || "",
    libraries,
  });
  const { loading } = useAppAuth();

  if (!isLoaded || loading) {
    return <Loading />;
  }

  return (
    <>
      <ChatContextProvider>
        <SocketProvider>
          <AppRouter />
          <ToastContainer
            position="bottom-center"
            autoClose={2000}
            hideProgressBar={true}
            theme="light"
          />
        </SocketProvider>
      </ChatContextProvider>
    </>
  );
};

export default App;
