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
    Mobile: mobile,
    LinkedIn: linkedIn,
    Gender: gender,
    Occupation: occupation,
    Company: company,
    About: about,
  };
  return secondaryInfoObj;
};
