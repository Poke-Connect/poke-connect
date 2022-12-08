import React from "react";

const ImageContainer = (props) => {
  const { photoURL = "", alt = "P", dimension = 10 } = props;
  return (
    <div
      className={`icon flex-none bg-lightGray rounded-lg flex items-center justify-center w-${dimension} h-${dimension}`}
    >
      <img
        src={photoURL}
        alt={alt}
        referrerPolicy="no-referrer"
        className="shadow rounded-full max-w-full h-auto align-middle border-none"
      />
    </div>
  );
};

export default ImageContainer;
