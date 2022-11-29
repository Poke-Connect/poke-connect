import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "context/AuthContext";

const LogOut = () => {
  const navigate = useNavigate();
  const { user, logOut } = UserAuth();

  const onLogOutPressHandler = async () => {
    if (!user || !user.uid) {
      navigate(`/signin`);
      return;
    }
    try {
      await logOut();
      navigate(`/signin`);
    } catch (error) {
      console.log(error);
    }
  };
  onLogOutPressHandler();
  return <div></div>;
};

export default LogOut;
