import React, { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { logout } from "features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "hooks";

interface IProps {
  children: ReactNode;
}

const Protected: FC<IProps> = (props) => {
  const { children } = props;
  const { user } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();

  if (!user || !user._id) {
    dispatch(logout());
    return <Navigate to="/signin" />;
  }
  return <>{children}</>;
};
export default Protected;
