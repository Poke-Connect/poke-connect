import React, { FC } from "react";
import HomeButton from "./HomeButton";
import { ToIcon, FromIcon, TO_NAME, FROM_NAME } from "AppConfig";

interface IProps {
  onTravelFromHandler: Function;
  onTravelToHandler: Function;
}

const NewConnectionContainer: FC<IProps> = (props) => {
  const { onTravelFromHandler, onTravelToHandler } = props;
  return (
    <div className="bg-lightGray p-4 flex flex-col rounded-2xl w-5/6 mt-20">
      <h2 className="text-2xl mb-6 text-left">Find new connections</h2>
      <div className="flex flex-col">
        <HomeButton
          onClick={onTravelToHandler}
          name={TO_NAME}
          IconParam={ToIcon}
        />
        <HomeButton
          onClick={onTravelFromHandler}
          name={FROM_NAME}
          IconParam={FromIcon}
        />
      </div>
    </div>
  );
};

export default NewConnectionContainer;
