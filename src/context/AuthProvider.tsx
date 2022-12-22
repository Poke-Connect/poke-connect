import React, { useContext, useEffect, useState, FC } from "react";
import { signOut, onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { userChatExists } from "db/firestore/dbWrites";
import { readUserExists } from "db/readUserExists";
import { AuthContext } from "./AuthContext";
import Loading from "pages/Loading";
import { addCorruptUser, addNewUser } from "./signInHandler";
import { signInWithGooglePopup } from "firebaseUtils/authUtils";
import { signInLogger } from "firebaseUtils/firebaseLogger";

interface IProps {
  children?: React.ReactNode;
}

export const AuthContextProvider: FC<IProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const googleSignIn = async () => {
    try {
      const res = await signInWithGooglePopup();

      signInLogger(res.user.uid, "Signed in with google", res.user.uid);

      const userExists = await readUserExists(res.user.uid);
      const userChatDbExists = await userChatExists(res.user.uid);

      const unCorruptedUser = userExists && userChatDbExists;

      const oldUser = unCorruptedUser;

      const newUser = !userExists && !userChatDbExists;

      signInLogger(res.user.uid, "Checking for user type", {
        userExists: userExists,
        userChatDbExists: userChatDbExists,
      });

      if (oldUser) {
        //Case1: Old User
        console.log("running old user");
        navigate("/home");
        signInLogger(res.user.uid, "old user", res.user.uid);
      } else if (newUser) {
        //Case2: New User
        console.log("running new user");
        await addNewUser(res);
        signInLogger(res.user.uid, "created new user", res.user.uid);
        navigate("/profile/edit", { state: { newUser: true } });
        signInLogger(res.user.uid, "navigated new user", res.user.uid);
      } else {
        //Case3 Corrupt User
        console.log("running corrupt user");
        await addCorruptUser(userExists, userChatDbExists, res);
        signInLogger(res.user.uid, "corrupt user", res.user.uid);
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
