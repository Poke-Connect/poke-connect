import React, { useState, useEffect } from "react";
import Connections from "./components/Connections";
import Heading from "components/UI/Heading";
import { getUserConnections } from "api/connection";
import { filterConnections } from "./helper";
import { useSelector, useDispatch } from "react-redux";
import { resetCount } from "features/conversations/conversationsSlice";
import { emptyNewConnections } from "api/user";

const MyConnections = () => {
  const { user } = useSelector((store) => store.auth);
  const { unreadCount } = useSelector((store) => store.conversations);

  const dispatch = useDispatch();
  const [myConnections, setMyConnections] = useState(null);

  useEffect(() => {
    const fetchConnections = async () => {
      const userConnections = await getUserConnections(user._id);
      const connections = filterConnections(userConnections, user._id);
      setMyConnections(connections);
    };

    user._id && fetchConnections();

    if (unreadCount > 0) {
      emptyNewConnections(user._id);
    }
    dispatch(resetCount());
  }, [user._id]);

  return (
    <div className="px-6 w-screen">
      <Heading text={"My Connections"} />
      <div>
        {myConnections && <Connections myConnections={myConnections} />}
      </div>
    </div>
  );
};

export default MyConnections;
