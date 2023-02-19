import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { postRequest } from "../axiosConfig";
// import { BASE_URL } from "../constants";
import { useNavigate } from "react-router-dom";
import { authenticate, isAuth } from "../helpers/helpersAuth";

const BASE_URL = "http://localhost:5900";

const POST_URL = `${BASE_URL}/auth/google-login`;

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
