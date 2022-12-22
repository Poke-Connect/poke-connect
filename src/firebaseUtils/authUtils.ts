import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { auth } from "firebaseConfig";

const googleProvider = new GoogleAuthProvider();

export const signInWithGooglePopup = async () =>
  await signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = async () =>
  await signInWithRedirect(auth, googleProvider);

export const authSignOut = async () => await signOut(auth);
