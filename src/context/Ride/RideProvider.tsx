import React, { useContext, FC, useState, useEffect } from "react";
import { RideContext } from "./RideContext";
import { isAuth } from "helpers/helpersAuth";
import { getUser } from "api/user";
import { Navigate } from "react-router-dom";

interface IProps {
  children?: React.ReactNode;
}

export const RideContextProvider: FC<IProps> = ({ children }) => {
  const user = isAuth() ? isAuth() : null;
  const parsedUser = user ? JSON.parse(user) : null;
  const [newUser, setNewUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUser(parsedUser._id);
      setNewUser(res?.data);
    };
    if (parsedUser?._id) {
      fetchUser();
    } else {
      <Navigate to="/signin" />;
    }
  }, []);

  if (!newUser && parsedUser?._id) {
    return null;
  }

  return (
    <RideContext.Provider value={{ ride: newUser }}>
      {children}
    </RideContext.Provider>
  );
};

export const CurrentRide = () => {
  return useContext(RideContext);
};
