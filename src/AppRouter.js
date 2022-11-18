import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home/Home";
import MyTrips from "./pages/MyTrips/MyTrips";
import AvailableMatches from "./pages/Matches/AvailableMatches";
import MyConnections from "./pages/MyConnections/MyConnection";
import MyProfile from "./pages/MyProfile";
import Chat from "./pages/Chat";
import UserProfile from "./pages/UserProfile";
import NewConnection from "./pages/NewConnection/NewConnection";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Navigate to="/home" />} />
      <Route path="/home" exact element={<Home />} />

      <Route path="/mytrips" exact element={<MyTrips />} />

      <Route path="/connections" exact element={<MyConnections />} />
      <Route path="/connections/new" element={<NewConnection />} />
      <Route path="/matches/:rideId" exact element={<AvailableMatches />} />

      <Route path="/userId/chat" element={<Chat />} />

      <Route path="/profile" exact element={<MyProfile />} />
      <Route path="/userId" element={<UserProfile />} />
      <Route path="/about" exact element={<About />} />

      <Route path="*" element={<Error />} />
    </Routes>
  );
};
export default AppRouter;
