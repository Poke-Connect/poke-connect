import { logEvent } from "firebase/analytics";
import { analytics } from "firebaseConfig";

export const eventLogger = (eventName) => {
  logEvent(analytics, eventName);
};

export const errorLogger = (userId, error) => {
  logEvent(analytics, "error", {
    userId: userId,
    error: error,
  });
};

export const signInLogger = (userId, step, data) => {
  logEvent(analytics, "signIn", {
    userId: userId,
    step: step,
    data: data,
  });
};
