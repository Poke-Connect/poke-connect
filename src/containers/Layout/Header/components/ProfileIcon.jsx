import React from "react";

const ProfileIcon = (props) => {
  const { photoURL = "", displayName = "", onClickHandler } = props;
  return (
    <button
      className="flex-none  cursor-pointer w-8 h-8 "
      onClick={onClickHandler}
    >
      <img
        src={photoURL}
        alt={displayName[0]}
        className="shadow rounded-full max-w-full h-auto align-middle border-none"
      />
    </button>
  );
};

export default ProfileIcon;
