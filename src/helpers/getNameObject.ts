export const getNameObject = (displayName: string) => {
  const nameArr = displayName.split(" ");
  return [nameArr[0], nameArr[nameArr.length - 1]];
};
