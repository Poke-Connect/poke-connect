import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "pages/Loading";
import { signInLogger } from "firebaseUtils/firebaseLogger";
import { useAppSelector } from "hooks";
import { AppInfo, GoogleLoginButton, PokeHeading } from "./components";
import { CopyRightFooter } from "components";

const SignIn: FC = () => {
  const { user, loading } = useAppSelector((store) => store.auth);
  const navigate = useNavigate();

  const aboutLinkHandler = () => {
    navigate("/about");
  };

  useEffect(() => {
    if (user !== null) {
      signInLogger(null, "navigating to home screen", null);
      navigate("/home");
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col min-h-screen ">
      <PokeHeading />
      <div className="flex flex-col text-primary px-7 pt-5 pb-0 ">
        <h2 className="font-medium text-xl pl-1 py-5">
          Meet new co-passengers
        </h2>
        <GoogleLoginButton />
      </div>
      <div className="mt-2 mb-6">
        <AppInfo aboutLinkHandler={aboutLinkHandler} />
      </div>
      <div className="flex-none mt-auto">
        <CopyRightFooter />
      </div>
    </div>
  );
};

export default SignIn;
