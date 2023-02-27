import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "features/auth/authSlice";

const GoogleLoginButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSuccessHandler = async (credentialResponse) => {
    try {
      dispatch(login(credentialResponse.credential));
      navigate("/home");
    } catch (error) {
      console.log("error while success signin", error);
    }
  };

  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => onSuccessHandler(credentialResponse)}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default GoogleLoginButton;
