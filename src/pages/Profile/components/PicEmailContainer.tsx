import React, { FC } from "react";
import ImageContainer from "components/UI/ImageContainer";

interface IProps {
  photoURL: string;
  email: string;
}

const PicEmailContainer: FC<IProps> = (props) => {
  const { photoURL, email } = props;
  return (
    <div
      id="pic&email"
      className="flex flex-row items-center justify-start ml-2 pb-3"
    >
      <ImageContainer alt={"Profile"} photoURL={photoURL} dimension={10} />
      <div className="text-primary ml-3 mr-1">
        <p className="text-ellipsis overflow-hidden line-clamp-1 italic text-base">
          {email}
        </p>
      </div>
    </div>
  );
};

export default PicEmailContainer;
