import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

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

//Initialize Firebase services
const app = initializeApp(firebaseConfig);
export const auth = new getAuth(app);
export const fireStoreDb = getFirestore();
export const analytics = getAnalytics(app);
export const perf = getPerformance(app);

export const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6Lcp-nIjAAAAAM-mqbKoq4hwHkcexGkMteTYmsxT"),
  isTokenAutoRefreshEnabled: true,
});
