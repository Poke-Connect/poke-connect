import ZomalandTo from "assets/icons/ZomalandTo";
import ZomalandFrom from "assets/icons/ZomalandFrom";
import PlaneLanding from "assets/icons/PlaneLanding";
import PlaneTakeoff from "assets/icons/PlaneTakeoff";
import { COORDINATES } from "appConstants";

//Home Screen
const TO_NAME = "To KIA Airport";
const FROM_NAME = "From KIA Airport";

//New Ride Screen
const INPUT_NAME = "KIA Airport";
const INPUT_PLACEHOLDER = "Kempegowda International Airport";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const {
  EMBASSY_INTERNATIONAL,
  BANGALORE,
  MUMBAI,
  JIO_WORLD_DRIVE_MUMBAI,
  KIA,
} = COORDINATES;

export {
  PlaneLanding as ToIcon,
  PlaneTakeoff as FromIcon,
  TO_NAME,
  FROM_NAME,
  INPUT_NAME,
  INPUT_PLACEHOLDER,
  //Using Mumbai for Leap affair
  KIA as MAP_FIXED_COORD,
  BANGALORE as CITY_COORDINATES,
};
