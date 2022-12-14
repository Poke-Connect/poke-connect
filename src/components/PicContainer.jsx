import React from "react";

const PicContainer = (props) => {
  const { photoURL, alt, onClickHandler } = props;
  return (
    <div
      id="profilePicContainer"
      className="icon flex-none w-14 h-14 bg-lightGray rounded-lg flex items-center justify-center "
      onClick={onClickHandler ? onClickHandler : null}
    >
      <img
        src={photoURL}
        referrerPolicy="no-referrer"
        alt={alt}
        className="shadow rounded-full max-w-full h-auto align-middle border-none"
      />
    </div>
  );
};

export default PicContainer;
