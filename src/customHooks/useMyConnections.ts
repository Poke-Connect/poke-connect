import { getUserConnections } from "api/connection";
import { filterConnections } from "pages/MyConnections/helper";
import { useState, useEffect } from "react";

export const useMyConnections = (userId: any) => {
  const [myConnections, setMyConnections] = useState<any>(null);

  useEffect(() => {
    const fetchConnections = async () => {
      const userConnections = await getUserConnections(userId);
      const connections = filterConnections(userConnections, userId);
      setMyConnections(connections);
    };

    userId && fetchConnections();
  }, [userId]);

  return myConnections;
};
