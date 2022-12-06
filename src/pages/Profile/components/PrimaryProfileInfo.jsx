import React from "react";
import { useNavigate } from "react-router-dom";
import EditIcon from "assets/icons/EditIcon";
import IconButton from "components/IconButton";
import ImageContainer from "components/UI/ImageContainer";

const PrimaryProfileInfo = (props) => {
  const { displayName, email, photoURL } = props;

  const navigate = useNavigate();

  const onEditPressHandler = () => {
    navigate("/profile/edit");
  };

  return (
    <div className="profile-into flex flex-row items-center p-2 md:p-7 pb-0">
      <ImageContainer alt={displayName[0]} photoURL={photoURL} dimension={10} />
      <div className="profile-detail flex-none">
        <div className="user-name flex items-left font-bold text-xl">
          {displayName}
        </div>
        <div className="user-email flex items-left font-normal text-sm text-primary">
          {email}
        </div>
      </div>
      <div className="edit pl-2 md:pl-10">
        <IconButton IconParam={EditIcon} onPressHandler={onEditPressHandler} />
      </div>
    </div>
  );
};

export default PrimaryProfileInfo;
