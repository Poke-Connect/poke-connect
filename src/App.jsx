import React, { useState } from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import { useJsApiLoader } from "@react-google-maps/api";
import { AuthContextProvider } from "context/AuthProvider";
import { ChatContextProvider } from "context/ChatContext";
import Loading from "./pages/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [libraries] = useState(["places"]);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_POKE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <AuthContextProvider>
      <ChatContextProvider>
        <AppRouter />
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={true}
          theme="light"
        />
      </ChatContextProvider>
    </AuthContextProvider>
  );
};

export default App;
