import React from "react";
import { useNavigate } from "react-router-dom";
import FooterButton from "./FooterButton";

const FooterLayout = (props) => {
  const { rideId } = props;
  const navigate = useNavigate();

  const onAvailablePressHandler = () => {
    navigate(`/connections/${rideId}/available`);
  };

  const onConnectedPressHandler = () => {
    navigate(`/connections/${rideId}`);
  };
  return (
    <div className=" flex-row absolute bg-blue-400 mt-10 h-12 bottom-0 w-screen flex-1">
      <FooterButton
        onClickHandler={onConnectedPressHandler}
        text={"Connected"}
      />
      <FooterButton
        onClickHandler={onAvailablePressHandler}
        text={"Available"}
      />
    </div>
  );
};

export default FooterLayout;
