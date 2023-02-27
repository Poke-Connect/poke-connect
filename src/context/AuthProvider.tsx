import React, { useContext, FC, useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { clearStorageData, isAuth } from "helpers/helpersAuth";
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
    // console.log("running use effect to fetch user");
    const fetchUser = async () => {
      const userData = await getUser(parsedUser._id);
      // console.log("user fetch", userData);
      setAuthUser(userData);
    };
    if (parsedUser?._id) {
      fetchUser();
      // console.log("still here");
    } else {
      <Navigate to="/signin" />;
    }
  }, []);

  if (parsedUser?._id && !authUser) {
    // console.log("empty auth context", authUser);
    clearStorageData();
    return null;
  }

  // console.log("complete auth context", authUser);

  return (
    <AuthContext.Provider value={{ user: authUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
