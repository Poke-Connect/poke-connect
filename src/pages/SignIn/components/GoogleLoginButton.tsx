import React, { FC } from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { login } from "features/auth/authSlice";
import { useAppDispatch } from "hooks";

const GoogleLoginButton: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSuccessHandler = async (credentialResponse: CredentialResponse) => {
    try {
      if (credentialResponse && credentialResponse.credential) {
        dispatch(login(credentialResponse.credential));
        navigate("/home");
      }
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
