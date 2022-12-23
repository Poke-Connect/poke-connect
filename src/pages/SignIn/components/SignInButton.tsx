import React, { FC } from "react";
import GoogleIcon from "assets/icons/GoogleIcon";

interface IProps {
  handleGoogleSignIn: () => void;
}

const SignInButton: FC<IProps> = ({ handleGoogleSignIn }) => {
  return (
    <button
      className="flex flex-row p-4 w-full bg-black gap-5 border-b-4 border-r-4 border-primary text-white md:w-3/5"
      onClick={handleGoogleSignIn}
    >
      <span className="googleImg">
        <GoogleIcon />
      </span>
      <span>Sign in with Google</span>
    </button>
  );
};

export default SignInButton;
