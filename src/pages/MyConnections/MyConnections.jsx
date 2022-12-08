import React, { useState, useEffect } from "react";
import Connections from "./components/Connections";
import { UserAuth } from "context/AuthContext";
import { onSnapshot, doc } from "firebase/firestore";
import { fireStoreDb } from "firebaseConfig";

const MyConnections = () => {
  const { user } = UserAuth();

  const [myConnections, setMyConnections] = useState(null);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(
        doc(fireStoreDb, "userChats", user.uid),
        (doc) => {
          setMyConnections(doc.data());
        }
      );
      return () => {
        unsub();
      };
    };
    user.uid && getChats();
  }, [user.uid]);

  return (
    <div className="pt-6 w-full px-6">
      <h1 className="text-3xl font-bold "> My Connections </h1>
      <div className="scroll-fix">
        <Connections myConnections={myConnections} />
      </div>
    </div>
  );
};

export default MyConnections;
