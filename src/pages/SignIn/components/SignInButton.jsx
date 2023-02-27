import React from "react";
import GoogleIcon from "assets/icons/GoogleIcon";
import { useGoogleLogin } from "@react-oauth/google";
import { login } from "features/auth/authSlice";
import { useDispatch } from "react-redux";

const SignInButton = () => {
  const dispatch = useDispatch();

  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      console.log(codeResponse);
      dispatch(login(codeResponse.code));

      // const tokens = await axios.post("http://localhost:3001/auth/google", {
      //   code: codeResponse.code,
      // });

      // console.log(tokens);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return (
    <button
      className="flex flex-row p-4 w-full bg-black gap-5 border-4 border-r-4 border-primary text-white md:w-3/5"
      onClick={() => googleLogin()}
    >
      <span className="googleImg">
        <GoogleIcon />
      </span>
      <span>Sign in with Google</span>
    </button>
  );
};

export default SignInButton;
