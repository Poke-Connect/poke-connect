import React from "react";
import EditIcon from "../../assets/icons/EditIcon";
import myData from "../../assets/mockData/data.json";
// import { useNavigate, useLocation } from "react-router-dom";
// import { UserAuth } from "../../context/AuthContext";
import SecondaryProfileInfo from "./components/SecondaryProfileInfo";

const MyProfile = () => {
  // const { user: userAuthData } = UserAuth();
  // const location = useLocation();
  // const editMode = location.state?.edit ? location.state?.edit : false;

  const userPrimaryInfo = myData.userProfile.primaryInfo;
  const userSecondaryInfo = myData.userProfile.secondaryInfo;

  return (
    <div className="pt-6 pb-10">
      <div className="profile-into flex flex-row items-center">
        <div className="profile-picture flex-none"></div>
        <div className="profile-detail flex-none pl-2.5">
          <div className="user-name flex items-left font-bold text-xl">
            {userPrimaryInfo.userName}
          </div>
          <div className="user-email flex items-left font-normal text-sm">
            {userPrimaryInfo.userEmail}
          </div>
        </div>
        <div className="edit flex-1">
          <EditIcon />
        </div>
      </div>
      <SecondaryProfileInfo userSecondaryInfo={userSecondaryInfo} />

      <div className="logout flex pl-3 pt-5 ">
        <button className="bg-black text-white px-5 py-1.5 rounded-lg font-sm font-semibold">
          Logout
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
