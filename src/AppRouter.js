import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import MyTrips from "./pages/MyTrips";
import AvailableMatches from "./pages/AvailableMatches";
import MyConnections from "./pages/MyConnection";
import MyProfile from "./pages/MyProfile";
import Chat from "./pages/Chat";
import UserProfile from "./pages/UserProfile";
import NewConnection from "./pages/NewConnection";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" exact element={<About />} />
      <Route path="/home" exact element={<Home />} />

      <Route path="/mytrips" exact element={<MyTrips />} />

      <Route path="connections/new" element={<NewConnection />} />
      <Route path="/matches" exact element={<AvailableMatches />} />

      <Route path="/connections" exact element={<MyConnections />} />
      <Route path="/userId/chat" element={<Chat />} />

      <Route path="/profile" exact element={<MyProfile />} />
      <Route path="/userId" element={<UserProfile />} />
      <Route path="/about" exact element={<About />} />

      <Route path="*" element={<Error />} />
    </Routes>
  );
};
export default AppRouter;
