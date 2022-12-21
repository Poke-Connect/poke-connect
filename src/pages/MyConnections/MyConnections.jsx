import React, { useState, useEffect } from "react";
import Connections from "./components/Connections";
import { UserAuth } from "context/AuthProvider";
import { onSnapshot, doc } from "firebase/firestore";
import { fireStoreDb } from "firebaseConfig";
import Heading from "components/UI/Heading";

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
    <div className="pl-6 pr-7 w-screen">
      <Heading text={"My Connections"} />
      <div>
        <Connections myConnections={myConnections} />
      </div>
    </div>
  );
};

export default MyConnections;
