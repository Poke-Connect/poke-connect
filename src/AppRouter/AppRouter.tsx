import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About/About";
import Error from "../pages/Error";
import Home from "../pages/Home/Home";
import MyTrips from "../pages/MyTrips/MyTrips";
import AvailableConnections from "../pages/RideConnections/AvailableConnections/AvailableConnections";
import MyConnections from "../pages/MyConnections/MyConnections";
import Chat from "../pages/Chat/Chat";
import Profile from "../pages/Profile/Profile";
import NewRide from "../pages/NewRide/NewRide";
import SignIn from "../pages/SignIn/SignIn";
import Protected from "../pages/Protected";
import LogOut from "../pages/LogOut";
import ConnectedConnections from "../pages/RideConnections/ConnectedConnections/ConnectedConnections";
import EditProfile from "../pages/Profile/EditProfile/EditProfile";
import RideConnections from "pages/RideConnections/RideConnections";
import AppLayout from "./AppLayout";
import PokeSocial from "pages/PokeSocial/PokeSocial";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="about" element={<About />} />
      <Route path="/social" element={<PokeSocial />} />
      <Route
        element={
          <Protected>
            <AppLayout />
          </Protected>
        }
      >
        <Route
          path="/"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />

        <Route
          path="home"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />

        <Route
          path="mytrips"
          element={
            <Protected>
              <MyTrips />
            </Protected>
          }
        />

        <Route
          path="connections"
          element={
            <Protected>
              <MyConnections />
            </Protected>
          }
        />

        <Route
          path="connections/new"
          element={
            <Protected>
              <NewRide />
            </Protected>
          }
        />
        <Route
          path="rideconnections/:rideId"
          element={
            <Protected>
              <RideConnections />
            </Protected>
          }
        >
          <Route
            path="connected"
            element={
              <Protected>
                <ConnectedConnections />
              </Protected>
            }
          />
          <Route
            path="available"
            element={
              <Protected>
                <AvailableConnections />
              </Protected>
            }
          />
        </Route>

        <Route
          path="user/:userId"
          element={
            <Protected>
              <Profile />
            </Protected>
          }
        />
        <Route
          path="user/:userId/edit"
          element={
            <Protected>
              <EditProfile />
            </Protected>
          }
        />
        <Route path="logout" element={<LogOut />} />

        <Route path="*" element={<Error />} />
        <Route
          path="/chat/:chatId"
          element={
            <Protected>
              <Chat />
            </Protected>
          }
        />
      </Route>
    </Routes>
  );
};
export default AppRouter;
