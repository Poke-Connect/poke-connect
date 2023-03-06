export const getSecondaryInfo = (profileData) => {
  const {
    mobile = "",
    linkedIn = "",
    gender = "",
    occupation = "",
    company = "",
    about = "",
  } = profileData;

  const secondaryInfoObj = {
    mobile: mobile,
    linkedIn: linkedIn,
    gender: gender,
    occupation: occupation,
    company: company,
    about: about,
  };
  return secondaryInfoObj;
};

export const checkIfEmptyField = (secondaryInfo) => {
  for (let info in secondaryInfo) {
    if (!secondaryInfo[info]) {
      return true;
    }
  }
  return false;
};
