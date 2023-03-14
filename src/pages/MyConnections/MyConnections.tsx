import React, { useEffect } from "react";
import { resetCount } from "features/conversations/conversationsSlice";
import { emptyNewConnections } from "api/user";
import { useMyConnections } from "customHooks";
import { Heading } from "components";
import { useAppDispatch, useAppSelector } from "hooks";
import { Connections } from "./components";

const MyConnections = () => {
  const { user } = useAppSelector((store) => store.auth);
  const { unreadCount } = useAppSelector((store) => store.conversations);
  const dispatch = useAppDispatch();
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
