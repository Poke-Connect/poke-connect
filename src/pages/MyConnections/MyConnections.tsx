import React, { useEffect } from "react";
import Connections from "./components/Connections";
import { useSelector, useDispatch } from "react-redux";
import { resetCount } from "features/conversations/conversationsSlice";
import { emptyNewConnections } from "api/user";
import { useMyConnections } from "customHooks";
import { Heading } from "components";

const MyConnections = () => {
  const { user } = useSelector((store: any) => store.auth);
  const { unreadCount } = useSelector((store: any) => store.conversations);
  const dispatch = useDispatch();
  const myConnections = useMyConnections(user._id);

  useEffect(() => {
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
