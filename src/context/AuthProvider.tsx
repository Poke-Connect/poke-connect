import React, { useContext, FC, useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { isAuth } from "helpers/helpersAuth";
import { getUser } from "api/user";
import { Navigate } from "react-router-dom";

interface IProps {
  children?: React.ReactNode;
}

export const AuthContextProvider: FC<IProps> = ({ children }) => {
  const user = isAuth() ? isAuth() : null;
  const parsedUser = user ? JSON.parse(user) : null;
  const [authUser, setAuthUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser(parsedUser._id);
      setAuthUser(userData);
    };
    if (parsedUser?._id) {
      fetchUser();
    } else {
      <Navigate to="/signin" />;
    }
  }, []);

  if (!authUser && parsedUser?._id) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ user: authUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
