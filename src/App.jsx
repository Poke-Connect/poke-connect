import React, { useState } from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import { useJsApiLoader } from "@react-google-maps/api";
import { AuthContextProvider } from "context/AuthContext";
import { ChatContextProvider } from "context/ChatContext";
import Loading from "./pages/Loading";

const App = () => {
  const [libraries] = useState(["places"]);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_POKE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (!isLoaded) {
    console.log("loading js libraries");
    return <Loading />;
  }

  return (
    <AuthContextProvider>
      <ChatContextProvider>
        <AppRouter />
      </ChatContextProvider>
    </AuthContextProvider>
  );
};

export default App;
