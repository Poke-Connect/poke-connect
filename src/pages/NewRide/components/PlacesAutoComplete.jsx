import React from "react";
import usePlacesAutocomplete from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import InputField from "./InputField";
import Suggestions from "./Suggestions";
import LocationIcon from "assets/icons/locationIcon";

const BANGALORE_LAT = 12.972442;
const BANGALORE_LNG = 77.580643;

const PlacesAutocomplete = ({ placeholder, setLocationValue }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: new window.google.maps.LatLng(BANGALORE_LAT, BANGALORE_LNG),
      radius: 100,
    },
    debounce: 600,
    cache: 24 * 60 * 60,
  });

  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();
      setLocationValue(description);

      // Get latitude and longitude via utility functions
      //   getGeocode({ address: description }).then((results) => {
      //     const { lat, lng } = getLatLng(results[0]);
      //     console.log("📍 Coordinates: ", { lat, lng });
      //   });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <div className="m-4 p-4 h-15 bordder border-b-2 border-primary">
          <li
            key={place_id}
            onClick={handleSelect(suggestion)}
            className="flex flex-row"
          >
            <div className="w-1/5">
              <LocationIcon />
            </div>
            <div className="flex justify-items-start w-4/5">
              <Suggestions
                main_text={main_text}
                secondary_text={secondary_text}
              />
            </div>
          </li>
        </div>
      );
    });

  return (
    <div ref={ref}>
      <InputField
        name={value}
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder={placeholder}
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === "OK" && <ul>{renderSuggestions()}</ul>}
    </div>
  );
};

export default PlacesAutocomplete;
