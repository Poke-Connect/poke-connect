//dist | extraDist - distance in km

export const calculateCarbonSaved = (dist: number, extraDist: number) => {
  const carbonPerKm = 120; //in grams
  const carbonProduced = extraDist * carbonPerKm;
  const carbonReduced = (dist / 2) * carbonPerKm;
  const netReduction = carbonReduced - carbonProduced; //in grams
  console.log("netReduction in kg = ", netReduction / 1000);
  const carbonPerTreePerDay = 25 / 365; //carbon absorbed per day by 1 tree in kg
  const numTreeDays = Math.floor(netReduction / (1000 * carbonPerTreePerDay));
  console.log("number of tree days = ", numTreeDays);
  return netReduction > 0 ? netReduction : 0;
};
