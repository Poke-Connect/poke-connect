import React, { useState, useEffect } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import Connections from "./components/Connections";
import { UserAuth } from "context/AuthContext";

const MyConnections = () => {
  const { user } = UserAuth();

  const userId = user.uid;

  const [myConnections, setMyConnections] = useState(null);

  const db = getDatabase();

  const myConnectionsRef = ref(db, `usersConnections/${userId}`);

  useEffect(() => {
    onValue(myConnectionsRef, (snapshot) => {
      const data = snapshot.val();
      setMyConnections(data);
    });
  }, []);

  return (
    <div className="pt-6">
      <h1 className="text-3xl font-bold "> My Connections </h1>
      <div className="scroll-fix">
        <Connections myConnections={myConnections} />
      </div>
    </div>
  );
};

export default MyConnections;
