import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  // signInWithRedirect,
  signOut,
  onAuthStateChanged,
  getAdditionalUserInfo,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { createUserObject } from "db/createUserObject";
import { addUserChatsDb, userChatExists } from "db/firestore/dbWrites";
import { readUserExists } from "db/readUserExists";

const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const res = await signInWithPopup(auth, provider);
      const details = await getAdditionalUserInfo(res);
      const userExists = await readUserExists(res.user.uid);

      const userChatDbExists = await userChatExists(res.user.uid);

      console.log("user exists: ", userExists);

      if (details.isNewUser) {
        await createUserObject(res);
        await addUserChatsDb(res.user.uid);
        navigate("/profile/edit", { state: { newUser: true } });
      } else if ((!userExists || !userChatDbExists) && !details.isNewUser) {
        if (!userExists) {
          await createUserObject(res);
        }
        if (!userChatDbExists) {
          await addUserChatsDb(res.user.uid);
        }

        navigate("/home");
      } else {
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
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

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
