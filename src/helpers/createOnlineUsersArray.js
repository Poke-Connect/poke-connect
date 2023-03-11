export const createOnlineUsersArray = (data) => {
  const userIds = [];
  if (data) {
    data.forEach((onlineUser) => {
      userIds.push(onlineUser.userId);
    });
  }
  return userIds;
};
