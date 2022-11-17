import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyALkq7kUVmZzzlaZ_rAIriYDQhayC9vnH8",
  authDomain: "poke-connect.firebaseapp.com",
  databaseURL:
    "https://poke-connect-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "poke-connect",
  storageBucket: "poke-connect.appspot.com",
  messagingSenderId: "190447028126",
  appId: "1:190447028126:web:a18b986482987c6521388f",
  measurementId: "G-7B452FMW4X",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = new getAuth(app);
