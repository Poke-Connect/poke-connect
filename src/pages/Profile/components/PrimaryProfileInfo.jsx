import React from "react";
import { useNavigate } from "react-router-dom";
import EditIcon from "../../../assets/icons/EditIcon";
import IconButton from "../../../components/IconButton";

const PrimaryProfileInfo = (props) => {
  const { displayName, email } = props;

  const navigate = useNavigate();

  const onEditPressHandler = () => {
    navigate("/profile/edit");
  };

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
        <IconButton IconParam={EditIcon} onPressHandler={onEditPressHandler} />
      </div>
    </div>
  );
};

export default PrimaryProfileInfo;
