import React from "react";
import ImageContainer from "components/UI/ImageContainer";

const PrimaryUserProfileInfo = (props) => {
  const { displayName, photoURL, linkedIn } = props;

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="profile-into flex flex-row items-center">
      <ImageContainer alt={displayName[0]} photoURL={photoURL} dimension={10} />
      <div className="profile-detail flex-none pl-2.5">
        <div className="user-name flex items-left font-bold text-xl">
          {displayName}
        </div>
        <div
          className="user-email flex items-left max-w-[70%]"
          onClick={() => openInNewTab(linkedIn)}
        >
          <p className="font-normal text-sm text-primary text-ellipsis overflow-hidden line-clamp-1 ">
            {linkedIn}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrimaryUserProfileInfo;
