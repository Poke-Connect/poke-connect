import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import EditIcon from "assets/icons/EditIcon";
import ImageContainer from "components/UI/ImageContainer";
import { capitaliseName } from "helpers/utils";
import { IconButton } from "components";

interface IProps {
  displayName: string;
  email: string;
  photoURL: string;
  userId: string;
}

const PrimaryProfileInfo: FC<IProps> = (props) => {
  const { displayName, email, photoURL, userId } = props;

  const navigate = useNavigate();

  const onEditPressHandler = () => {
    navigate(`/user/${userId}/edit`);
  };
  return (
    <div className="profile-into flex flex-row items-center p-2 md:p-7 pb-0">
      <ImageContainer alt={displayName[0]} photoURL={photoURL} dimension={10} />
      <div className="profile-detail flex-none ml-3">
        <div className="user-name flex items-left font-bold text-xl">
          {capitaliseName(displayName)}
        </div>
        <div className="user-email flex items-left font-normal text-sm text-primary">
          {email}
        </div>
      </div>
      <div className="edit pl-2 md:pl-10">
        <IconButton IconParam={EditIcon} onClickHandler={onEditPressHandler} />
      </div>
    </div>
  );
};

export default PrimaryProfileInfo;
