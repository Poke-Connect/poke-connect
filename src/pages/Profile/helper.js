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
