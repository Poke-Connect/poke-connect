import React from "react";
import { Route, Routes } from "react-router-dom";
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
import SignIn from "./pages/SignIn/SignIn";
import Protected from "./pages/Protected";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" exact element={<SignIn />} />
      <Route path="/signin" exact element={<SignIn />} />
      <Route path="/about" exact element={<About />} />

      <Route
        path="/home"
        exact
        element={
          <Protected>
            <Home />
          </Protected>
        }
      />
      <Route
        path="/mytrips"
        exact
        element={
          <Protected>
            <MyTrips />
          </Protected>
        }
      />
      <Route
        path="/connections"
        exact
        element={
          <Protected>
            <MyConnections />
          </Protected>
        }
      />
      <Route
        path="/connections/new"
        element={
          <Protected>
            <NewConnection />
          </Protected>
        }
      />
      <Route
        path="/matches/:rideId"
        exact
        element={
          <Protected>
            <AvailableMatches />
          </Protected>
        }
      />
      <Route
        path="/userId/chat"
        element={
          <Protected>
            <Chat />
          </Protected>
        }
      />
      <Route
        path="/profile"
        exact
        element={
          <Protected>
            <MyProfile />
          </Protected>
        }
      />
      <Route
        path="/userId"
        element={
          <Protected>
            <UserProfile />
          </Protected>
        }
      />

      <Route path="*" element={<Error />} />
    </Routes>
  );
};
export default AppRouter;
