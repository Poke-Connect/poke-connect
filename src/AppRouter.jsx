import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Error from "./pages/Error";
import Home from "./pages/Home/Home";
import MyTrips from "./pages/MyTrips/MyTrips";
import AvailableConnections from "./pages/RideConnections/AvailableConnections/AvailableConnections";
import MyConnections from "./pages/MyConnections/MyConnections";
import Profile from "./pages/Profile/Profile";
import Chat from "./pages/Chat/Chat";
import UserProfile from "./pages/Profile/UserProfile";
import NewRide from "./pages/NewRide/NewRide";
import SignIn from "./pages/SignIn/SignIn";
import Protected from "./pages/Protected";
import LogOut from "./pages/LogOut";
import ConnectedConnections from "./pages/RideConnections/ConnectedConnections/ConnectedConnections";
import EditProfile from "./pages/Profile/EditProfile";
import RideConnections from "pages/RideConnections/RideConnections";
import AppLayout from "components/Layout/AppLayout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/signin" exact element={<SignIn />} />
      <Route path="about" exact element={<About />} />
      <Route
        element={
          <Protected>
            <AppLayout />
          </Protected>
        }
      >
        <Route
          path="/"
          exact
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />

        <Route
          path="home"
          exact
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />

        <Route
          path="mytrips"
          exact
          element={
            <Protected>
              <MyTrips />
            </Protected>
          }
        />

        <Route
          path="connections"
          exact
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
          exact
          element={
            <Protected>
              <RideConnections />
            </Protected>
          }
        >
          <Route
            path="connected"
            exact
            element={
              <Protected>
                <ConnectedConnections />
              </Protected>
            }
          />
          <Route
            path="available"
            exact
            element={
              <Protected>
                <AvailableConnections />
              </Protected>
            }
          />
        </Route>
        <Route
          path="profile"
          exact
          element={
            <Protected>
              <Profile />
            </Protected>
          }
        />
        <Route
          path="profile/edit"
          exact
          element={
            <Protected>
              <EditProfile />
            </Protected>
          }
        />
        <Route
          path="user/:uid"
          element={
            <Protected>
              <UserProfile />
            </Protected>
          }
        />
        <Route path="logout" element={<LogOut />} />

        <Route path="*" element={<Error />} />
      </Route>
      <Route
        path="/chat/:chatId"
        element={
          <Protected>
            <Chat />
          </Protected>
        }
      />
    </Routes>
  );
};
export default AppRouter;
