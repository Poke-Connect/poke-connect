import { addFeedbackDb } from "db/dbWrites";
import React, { FC, useState } from "react";
import { toast } from "react-toastify";
import JoinForm from "./components/JoinForm";
import community from "../../assets/community.jpeg";

const WAITLIST_SUCCESS =
  "Hooray! 🎉 You've secured your spot on our waitlist. We'll give you a Poke when we're ready to launch!";
const WAITLIST_FAIL =
  "Oops! 🙁 Something went wrong while adding you to our waitlist. Please give it another try or contact us for assistance.";

const PokeSocial: FC = () => {
  const [email, setEmail] = useState<string>("");

  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    try {
      addFeedbackDb({ name: "WAITLIST", email: email, suggestion: "" });
      toast.success(WAITLIST_SUCCESS);
    } catch (error) {
      toast.error(WAITLIST_FAIL);
    }
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-8">
      <div>
        <h1 className="text-[2.25rem] leading-none font-bold mb-8">
          Poke Social.
        </h1>
        <p className="text-[3.25rem] leading-none mb-4">
          The new way to connect with your{" "}
          <span className="text-primary">community</span>
        </p>
      </div>
      <img
        src={community}
        alt="Community"
        className="h-72 w-full object-cover md:max-w-5xl my-2"
      />
      <JoinForm
        onSubmitHandler={onSubmitHandler}
        email={email}
        setEmail={setEmail}
      />
    </div>
  );
};

export default PokeSocial;
