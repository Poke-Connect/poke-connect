import React, { useState } from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import { useJsApiLoader } from "@react-google-maps/api";
import { AuthContextProvider } from "context/AuthContext";
import { ChatContextProvider } from "context/ChatContext";
import { useLocation } from "react-router-dom";
import Loading from "./pages/Loading";

const App = () => {
  const [libraries] = useState(["places"]);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_POKE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const location = useLocation();
  const val = location.pathname.includes("signin") || location.pathname === "/";

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <AuthContextProvider>
      <ChatContextProvider>
        <div
          className={`App md:mx-auto relative h-screen max-w-xl mx-auto ${
            val ? "pt-0" : "pt-24"
          }`}
        >
          <AppRouter />
        </div>
      </ChatContextProvider>
    </AuthContextProvider>
  );
};

export default App;
