import React, { useState, useEffect } from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import { useJsApiLoader } from "@react-google-maps/api";
import { ChatContextProvider } from "context/ChatContext";
import Loading from "./pages/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { getUserData, refreshAccessToken } from "features/auth/authSlice";
import { setUnreadCount } from "features/conversations/conversationsSlice";
import { getToken } from "helpers/helpersAuth";
import { useNavigate } from "react-router-dom";
import { SocketProvider } from "context/SocketContext";
import jwt_decode from "jwt-decode";

const App = () => {
  const [libraries] = useState(["places"]);
  const navigate = useNavigate();
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_POKE_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const token = getToken();
  const { user, loading } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      navigate("/signin");
      return;
    }

    const decodedToken = jwt_decode(token);

    if (decodedToken.exp < Date.now() / 1000) {
      dispatch(refreshAccessToken(navigate));
      return;
    }

    if (token && !user) {
      dispatch(getUserData(token));
      return;
    }

    dispatch(
      setUnreadCount({ newConnectionCount: user?.newConnections?.length })
    );
  }, [token, user]);

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
