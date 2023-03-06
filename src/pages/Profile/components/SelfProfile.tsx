import React, { useState } from "react";
import PrimaryProfileInfo from "./PrimaryProfileInfo";
import SecondaryProfileInfo from "./SecondaryProfileInfo";
import { checkIfEmptyField, getSecondaryInfo } from "../helper";
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

  const onUpdatePressHandler = () => {
    navigate(`/user/${_id}/edit`);
  };

  if (loading) {
    return <Loading />;
  }

  const isEmpty = checkIfEmptyField(secondaryInfo);

  return (
    <div className="pt-3 pb-10 pl-6 w-screen ">
      <PrimaryProfileInfo
        displayName={displayName}
        email={email}
        photoURL={photoURL}
        userId={_id}
      />
      <SecondaryProfileInfo secondaryInfo={secondaryInfo} />
      <div className="flex  pt-5 items-start justify-between pl-6 pr-7 ">
        <button
          className="bg-black text-white px-5 py-1.5 font-sm font-semibold"
          onClick={onLogOutPressHandler}
        >
          Logout
        </button>
        {isEmpty && (
          <button
            type={"button"}
            onClick={onUpdatePressHandler}
            className="bg-white text-primary underline p-1 pl-4 pr-4 text-base underline-offset-2 font-semibold"
          >
            Complete Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default SelfProfile;
