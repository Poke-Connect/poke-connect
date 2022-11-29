import React, { useEffect } from "react";
import { UserAuth } from "context/AuthContext";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "assets/icons/GoogleIcon";
import About from "../About/About";

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

  useEffect(() => {
    if (user != null) {
      navigate("/home");
    }
  }, [user]);

  return (
    <div className="flex flex-col text-left h-screen">
      <div className="flex flex-col bg-black text-white p-7">
        <h1 className="pt-16 font-bold text-8xl">POKE</h1>
        <h4 className="text-xl font-light pl-1 tracking-[.15em] mt-[-10px]">
          carpooling made easy
        </h4>
        <h3 className="pt-14 font-semibold text-xl pl-1 py-5">
          Meet new co-passenger
        </h3>

        <button
          className="flex flex-row p-4 border w-fit gap-5 border-lightYellow rounded-[10px]"
          onClick={handleGoogleSignIn}
        >
          <span className="googleImg">
            <GoogleIcon />
          </span>
          <span>SignIn with Google</span>
        </button>
      </div>
      <div className="pb-5">
        <About />
      </div>
    </div>
  );
};

export default SignIn;
