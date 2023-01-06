import { onValue } from "firebase/database";

export const getData = (dbRef, setData) => {
  onValue(dbRef, (snapshot) => {
    const data = snapshot.val();
    setData(data);
  });
};
