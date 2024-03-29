import React, { FC } from "react";
import { capitaliseFirstLetter } from "helpers/utils";

interface IProps {
  header: string;
  body: string | number;
}

const ProfileElement: FC<IProps> = (props) => {
  const { header, body } = props;
  return (
    <div className="pt-5 flex flex-col items-start mr-2">
      <div className="font-semibold text-base">
        {capitaliseFirstLetter(header)}
      </div>
      <div className="pr-2 w-full">
        <p className="font-normal text-base text-left w-full break-words">
          {body}
        </p>
      </div>
    </div>
  );
};

export default ProfileElement;
