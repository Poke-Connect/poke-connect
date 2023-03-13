export const createOnlineUsersArray = (data: any) => {
  const userIds: string[] = [];
  if (data) {
    data.forEach((onlineUser: any) => {
      userIds.push(onlineUser.userId);
    });
  }
  return userIds;
};
