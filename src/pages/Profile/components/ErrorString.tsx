import React, { FC } from "react";

interface IProps {
  text: any;
}

const ErrorString: FC<IProps> = (props) => {
  const { text } = props;
  if (!text) {
    return null;
  }

  let errorText: string;
  if (Array.isArray(text)) {
    errorText = text[0];
  } else if (typeof text === "string") {
    errorText = text;
  } else {
    errorText = "Invalid input";
  }

  return <p className="text-sm text-primary">{errorText}</p>;
};

export default ErrorString;
