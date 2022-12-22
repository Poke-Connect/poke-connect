import React, { useEffect, useState } from "react";
import { UserAuth } from "context/AuthProvider";
import { useNavigate } from "react-router-dom";
import ReachUs from "../About/components/ReachUs";
import Loading from "pages/Loading";
import LinkText from "components/UI/LinkText";
import SignInButton from "./components/SignInButton";
import { errorLogger, signInLogger } from "firebaseUtils/firebaseLogger";

const ABOUT_US_MIN =
  "Poke helps you connect with probable co-passengers and share a cab.";

const POWER_POKE =
  "Poke is powered by people like you. Please give us feedback to help us build a better experience for you and share with your friends to increase your chances of connection.";

const SignIn = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await googleSignIn();
      setLoading(false);
    } catch (error) {
      console.log(error);
      errorLogger(null, `handleGoogleSignIn error: ${error}`);
    }
  };

  const handleAboutUs = () => {
    navigate("/about");
  };

  useEffect(() => {
    if (user != null) {
      signInLogger(null, "navigating to home screen", null);
      navigate("/home");
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col text-left h-full overflow-y-scroll pb-20">
      <div className="flex flex-col bg-black text-white px-7 pt-2 border-b-8 border-primary">
        <h1 className="pt-8 pl-2 font-medium text-8xl">POKE</h1>
        <h4 className="text-2xl font-medium tracking-[.05em] pl-3 pt-5 pb-4 mt-[-10px]">
          Connect via travel
        </h4>
      </div>
      <div className="flex flex-col text-primary pr-7 pt-5 pb-0 pl-9">
        <h3 className="font-medium pt-2 text-xl pl-1 py-5">
          Meet new co-passengers
        </h3>
        <SignInButton handleGoogleSignIn={handleGoogleSignIn} />
      </div>
      <div className="pb-5">
        <div className="px-10">
          <div className="about-us text-left pt-7">
            <h2 className="font-semibold text-xl pb-1.5">About Us</h2>
            <p className="font-normal text-sm">{ABOUT_US_MIN}</p>
            <LinkText
              text={"Learn more about Poke"}
              onClickHandler={handleAboutUs}
            />
          </div>
          <div className="power-us text-left pt-7">
            <h2 className="font-semibold text-xl pb-1.5">Power Poke</h2>
            <p className="font-normal text-sm">{POWER_POKE}</p>
            <p className="font-normal text-sm "></p>
          </div>
          <div className="power-us text-left pt-7">
            <ReachUs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
