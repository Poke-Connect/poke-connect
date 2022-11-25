import React from "react";
import EditIcon from "../../..//assets/icons/EditIcon";

const PrimaryProfileInfo = (props) => {
  const { displayName, email } = props;
  return (
    <div className="profile-into flex flex-row items-center">
      <div className="profile-picture flex-none"></div>
      <div className="profile-detail flex-none pl-2.5">
        <div className="user-name flex items-left font-bold text-xl">
          {displayName}
        </div>
        <div className="user-email flex items-left font-normal text-sm">
          {email}
        </div>
      </div>
      <div className="edit flex-1">
        <EditIcon />
      </div>
    </div>
  );
};

export default PrimaryProfileInfo;
