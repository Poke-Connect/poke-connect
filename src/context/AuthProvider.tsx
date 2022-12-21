import React, { useContext, useEffect, useState, FC } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  getAdditionalUserInfo,
  User,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { userChatExists } from "db/firestore/dbWrites";
import { readUserExists } from "db/readUserExists";
import { AuthContext } from "./AuthContext";
import Loading from "pages/Loading";
import { addCorruptUser, addNewUser } from "./signInHandler";

interface IProps {
  children?: React.ReactNode;
}

export const AuthContextProvider: FC<IProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const res = await signInWithPopup(auth, provider);
      const details = getAdditionalUserInfo(res);

      const userExists = await readUserExists(res.user.uid);
      const userChatDbExists = await userChatExists(res.user.uid);

      const unCorruptedUser = userExists && userChatDbExists;

      const oldUser = unCorruptedUser;

      const newUser = details && details.isNewUser;

      //   alert(newUser);

      if (oldUser) {
        //Case1: Old User
        console.log("running old user");
        navigate("/home");
      } else if (newUser) {
        //Case2: New User
        console.log("running new user");
        await addNewUser(res);
        navigate("/profile/edit", { state: { newUser: true } });
      } else {
        //Case3 Corrupt User
        console.log("running corrupt user");
        await addCorruptUser(userExists, userChatDbExists, res);
        navigate("/home");
      }
    } catch (error) {
      console.log("Sign in error: ", error);
      navigate("/home");
    }
  };

  const logOut = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) {
    console.log("loading");
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
