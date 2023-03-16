import { Heading } from "components";
import React, { FC, ReactNode } from "react";

interface IProps {
  heading: string;
  children?: ReactNode;
}

const RideConnectionsLayout: FC<IProps> = (props) => {
  const { heading } = props;

  return (
    <div className="pl-6 pr-7">
      <Heading text={heading} />
      <div>{props.children}</div>
    </div>
  );
};

export default RideConnectionsLayout;
