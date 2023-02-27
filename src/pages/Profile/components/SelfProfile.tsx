import React, { useState } from "react";
import PrimaryProfileInfo from "./PrimaryProfileInfo";
import SecondaryProfileInfo from "./SecondaryProfileInfo";
import { getSecondaryInfo } from "../helper";
import { useNavigate } from "react-router-dom";
import Loading from "pages/Loading";
import { useDispatch } from "react-redux";
import { logout } from "features/auth/authSlice";

const SelfProfile = (props) => {
  const { profileData } = props;

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  if (!profileData) {
    return null;
  }
  const { displayName = "", email = "", photoURL = "", _id = "" } = profileData;
  const secondaryInfo = getSecondaryInfo(profileData);

  const onLogOutPressHandler = async () => {
    setLoading(true);
    try {
      dispatch(logout());
      navigate(`/signin`);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="pt-3 pb-10 pl-6 w-screen ">
      <PrimaryProfileInfo
        displayName={displayName}
        email={email}
        photoURL={photoURL}
        userId={_id}
      />
      <SecondaryProfileInfo secondaryInfo={secondaryInfo} />
      <div className="logout flex pl-3 pt-5 ">
        <button
          className="bg-black text-white px-5 py-1.5 font-sm font-semibold"
          onClick={onLogOutPressHandler}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default SelfProfile;
