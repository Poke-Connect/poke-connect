import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Error from "./pages/Error";
import Home from "./pages/Home/Home";
import MyTrips from "./pages/MyTrips/MyTrips";
import AvailableConnections from "./pages/RideConnections/AvailableConnections/AvailableConnections";
import MyConnections from "./pages/MyConnections/MyConnections";
import MyProfile from "./pages/Profile/MyProfile";
import Chat from "./pages/Chat";
import UserProfile from "./pages/UserProfile";
import NewRide from "./pages/NewRide/NewRide";
import SignIn from "./pages/SignIn/SignIn";
import Protected from "./pages/Protected";
import LogOut from "./pages/LogOut";
import ConnectedConnections from "./pages/RideConnections/ConnectedConnections/ConnectedConnections";
import EditProfile from "./pages/Profile/EditProfile";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        exact
        element={
          <Protected>
            <Home />
          </Protected>
        }
      />
      <Route path="/signin" exact element={<SignIn />} />
      <Route
        path="/about"
        exact
        element={
          <Protected>
            <About />
          </Protected>
        }
      />

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
            <NewRide />
          </Protected>
        }
      />
      <Route
        path="/connections/:rideId"
        exact
        element={
          <Protected>
            <ConnectedConnections />
          </Protected>
        }
      />
      <Route
        path="/connections/:rideId/available"
        exact
        element={
          <Protected>
            <AvailableConnections />
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
        path="/profile/edit"
        exact
        element={
          <Protected>
            <EditProfile />
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
      <Route path="/logout" element={<LogOut />} />

      <Route path="*" element={<Error />} />
    </Routes>
  );
};
export default AppRouter;
