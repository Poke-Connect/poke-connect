import React, { FC } from "react";

interface IProps {
  onSubmitHandler: any;
  email: any;
  setEmail: any;
}

const JoinForm: FC<IProps> = (props) => {
  const { onSubmitHandler, email, setEmail } = props;
  return (
    <div className="my-4 items-center justify-center flex flex-col">
      <p className="italic">Are you an event or hostel, looking to engage with your community?</p>
      <div className="flex flex-col justify-center items-center mt-2">
        <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row">
          <div className="flex-grow mb-1 md:mb-0 ">
            <input
              className=" appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight "
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-black hover:bg-primary rounded text-white py-1 px-4  whitespace-nowrap"
          >
            Join the Waitlist
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinForm;
