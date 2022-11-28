export const getNameObject = (displayName) => {
  const nameArr = displayName.split(" ");
  return [nameArr[0], nameArr[nameArr.length - 1]];
};
