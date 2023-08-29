import React, { FC } from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { login } from "features/auth/authSlice";
import { useAppDispatch } from "hooks";
import { toast } from "react-toastify";

const GoogleLoginButton: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSuccessHandler = async (credentialResponse: CredentialResponse) => {
    console.log("success in client login try", credentialResponse.credential);
    try {
      if (credentialResponse && credentialResponse.credential) {
        dispatch(login(credentialResponse.credential));

        console.log("dispatch of login done");

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
        toast.error(
          "Oops! Something's not right with the login charm. Please try again."
        );
      }}
    />
  );
};

export default GoogleLoginButton;
