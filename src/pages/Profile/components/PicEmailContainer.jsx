import React from "react";
import ImageContainer from "components/UI/ImageContainer";

const PicEmailContainer = (props) => {
  const { alt, photoURL, email } = props;
  return (
    <div
      id="pic&email"
      className="flex flex-row items-center justify-start ml-2 pb-3"
    >
      <ImageContainer alt={alt} photoURL={photoURL} dimension={10} />
      <div className="text-primary ml-3 mr-1">
        <p className="text-ellipsis overflow-hidden line-clamp-1 italic text-base">
          {email}
        </p>
      </div>
    </div>
  );
};

export default PicEmailContainer;
