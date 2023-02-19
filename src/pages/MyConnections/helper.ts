export const filterConnections = (userConnections, userId) => {
  if (!userId || !userConnections) {
    return [];
  }
  const newUserConnections: any[] = [];
  for (let connection of userConnections) {
    const [otherMember] = connection.members.filter(
      (member: any) => member._id !== userId
    );
    const newConnection = {
      _id: connection._id,
      userInfo: otherMember,
      lastMessage: connection.lastMessage,
      updatedAt: connection.updatedAt,
    };
    newUserConnections.push(newConnection);
  }

  return newUserConnections;
};
