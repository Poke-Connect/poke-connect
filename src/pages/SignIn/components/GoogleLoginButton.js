import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { postRequest } from "config/axiosConfig";
import { authenticate, isAuth } from "helpers/helpersAuth";
import { SERVER_URL } from "config/serverConfig";

const POST_URL = `${SERVER_URL}/auth/google-login`;

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const informParent = (res) => {
    authenticate(res, () => {
      console.log("checking auth", isAuth());
      isAuth() && navigate("/home");
      console.log("Successful");
    });
  };

  const onSuccessHandler = async (credentialResponse) => {
    const res = await postRequest(POST_URL, {
      idToken: credentialResponse.credential,
    });
    console.log("res = ", res);
    informParent(res);
  };

  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => onSuccessHandler(credentialResponse)}
      onError={() => {
        console.log("Login Failed");
      }}
      useOneTap
    />
  );
};

export default GoogleLoginButton;
