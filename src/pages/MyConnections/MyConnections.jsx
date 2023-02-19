import React, { useState, useEffect } from "react";
import Connections from "./components/Connections";
import { UserAuth } from "context/AuthProvider";
import Heading from "components/UI/Heading";
import { getUserConnections } from "api/connection";
import { filterConnections } from "./helper";

const MyConnections = () => {
  const { user } = UserAuth();

  const [myConnections, setMyConnections] = useState(null);

  useEffect(() => {
    const fetchConnections = async () => {
      const userConnections = await getUserConnections(user._id);
      const connections = filterConnections(userConnections, user._id);
      setMyConnections(connections);
    };

    user._id && fetchConnections();
  }, [user._id]);

  return (
    <div className="pl-6 pr-7 w-screen">
      <Heading text={"My Connections"} />
      <div>
        {myConnections && <Connections myConnections={myConnections} />}
      </div>
    </div>
  );
};

export default MyConnections;
