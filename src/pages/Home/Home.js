import React from "react";
import HomeButton from "./components/HomeButton";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const onClickTripsHandler = () => {
    navigate(`/mytrips`);
  };

  const onClickConnectionsHandler = () => {
    navigate(`/connections/new`);
  };

  return (
    <div>
      <h1>Home page </h1>
      <HomeButton onClick={onClickTripsHandler}>My Trips</HomeButton>
      <HomeButton onClick={onClickConnectionsHandler}>
        Find New Connections
      </HomeButton>
    </div>
  );
};

export default Home;
