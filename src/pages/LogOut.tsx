import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "context/AuthProvider";
import { signout } from "helpers/helpersAuth";

const LogOut = () => {
  const navigate = useNavigate();
  const { user } = UserAuth();

  const onLogOutPressHandler = async () => {
    if (!user) {
      navigate(`/signin`);
      return;
    }
    try {
      signout();
      navigate(`/signin`);
    } catch (error) {
      console.log(error);
    }
  };
  onLogOutPressHandler();
  return <div></div>;
};

export default LogOut;
