//STALE_FILE

export const addRideHandler = async (rideData) => {
  try {
    const response = await fetch(
      `https://poke-connect-default-rtdb.asia-southeast1.firebasedatabase.app/rides/${rideData.key}.json`,
      {
        method: "POST",
        body: JSON.stringify(rideData),
        "Content-Type": "application/json",
      }
    );
    return response;
  } catch (error) {
    console.log("error", error);
  }
};

export const fetchAllRides = async () => {
  let response = {};
  try {
    response = await fetch(
      "https://poke-connect-default-rtdb.asia-southeast1.firebasedatabase.app/rides.json"
    );
    if (response.status === 200) {
      console.log("request success");
    }
  } catch (error) {
    console.log("request error", error);
  }
  return response;
};

export const fetchRide = async (rideId) => {
  let response = {};
  try {
    response = await fetch(
      `https://poke-connect-default-rtdb.asia-southeast1.firebasedatabase.app/rides/${rideId}.json`
    );
    if (response.status === 200) {
      console.log("request success");
    }
  } catch (error) {
    console.log("request error", error);
  }
  return response;
};
