import React, { useEffect } from "react";
import { UserAuth } from "context/AuthContext";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "assets/icons/GoogleIcon";
import ReachUs from "../About/components/ReachUs";

const SignIn = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleAboutUs = () => {
    navigate("/about");
  }

  useEffect(() => {
    if (user != null) {
      navigate("/home");
    }
  }, [user]);

  return (
    <div className="flex flex-col text-left h-screen">
      <div className="flex flex-col bg-black text-white p-7 border-b-8 border-primary">
        <h1 className="pt-8 pl-2 font-medium text-8xl">POKE</h1>
        <h4 className="text-2xl font-medium tracking-[.05em] pl-3 pt-7 pb-2 mt-[-10px]">
          Connect via travel
        </h4>
      </div>
      <div className="flex flex-col text-primary p-7 pb-0 pl-9">
        <h3 className="font-medium pt-2 text-xl pl-1 py-5">
          Meet new co-passengers
        </h3>
        <button
          className="flex flex-row p-4 w-full bg-black gap-5 border-b-4 border-r-4 border-primary text-white md:w-3/5"
          onClick={handleGoogleSignIn}
        >
          <span className="googleImg">
            <GoogleIcon />
          </span>
          <span>Sign in with Google</span>
        </button>
      </div>
      <div className="pb-5">
        <div className="px-10">
          <div className="about-us text-left pt-7">
            <h2 className="font-semibold text-xl pb-1.5">About Us</h2>
            <p className="font-normal text-sm">Chupa chups donut donut danish marshmallow brownie lemon drops. </p>
            <p className="text-primary text-sm underline pt-2" onClick={handleAboutUs}>Learn more about Poke</p>
          </div>
          <div className="power-us text-left pt-7">
            <h2 className="font-semibold text-xl pb-1.5">Power Poke</h2>
            <p className="font-normal text-sm">Poke is powered by people like you. 
            Your donations help grow our team and build a better experience for you. 
            Be a part of our pledge to reduce 600 tonns of CO2 emissions in 2023.</p>
            <p className="text-primary text-sm underline pt-2" onClick={handleAboutUs}>Donate to Poke</p>
          </div>
          <div className="power-us text-left pt-1"><ReachUs /></div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
