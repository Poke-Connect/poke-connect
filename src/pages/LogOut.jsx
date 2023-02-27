import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "features/auth/authSlice";

const LogOut = () => {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const onLogOutPressHandler = async () => {
    if (!user) {
      navigate(`/signin`);
      return;
    }
    try {
      dispatch(logout());
      navigate(`/signin`);
    } catch (error) {
      console.log(error);
    }
  };
  onLogOutPressHandler();
  return <div></div>;
};

export default LogOut;
