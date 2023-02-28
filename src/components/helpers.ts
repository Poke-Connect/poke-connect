export const checkLocation = (pathname, toCheck) => {
  if (pathname.split("/")[1] === toCheck) {
    return true;
  } else {
    return false;
  }
};
