import ZomalandTo from "assets/icons/ZomalandTo";
import ZomalandFrom from "assets/icons/ZomalandFrom";
import { COORDINATES } from "appConstants";

//Home Screen
const TO_NAME = "to leap (af)fair";
const FROM_NAME = "from leap (af)fair";

//New Ride Screen
const INPUT_NAME = "leap (af)fair";
const INPUT_PLACEHOLDER = "jio world drive, bkc, mumbai";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { EMBASSY_INTERNATIONAL, BANGALORE, MUMBAI, JIO_WORLD_DRIVE_MUMBAI } =
  COORDINATES;

export {
  ZomalandTo as ToIcon,
  ZomalandFrom as FromIcon,
  TO_NAME,
  FROM_NAME,
  INPUT_NAME,
  INPUT_PLACEHOLDER,
  //Using Mumbai for Leap affair
  JIO_WORLD_DRIVE_MUMBAI as MAP_FIXED_COORD,
  MUMBAI as CITY_COORDINATES,
};
