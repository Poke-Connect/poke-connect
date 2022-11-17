//STALE_FILE

import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";

const ConnectionForm = () => {
  const [isSchedule, setIsSchedule] = useState(true);
  console.log(isSchedule);
  return (
    <div>
      <form>
        <div>
          <Autocomplete restrictions={{ country: "in" }}>
            <input type="location" name="from" placeholder="From?" />
          </Autocomplete>
          <Autocomplete restrictions={{ country: "in" }}>
            <input type="text" name="to" placeholder="Where to?" />
          </Autocomplete>
        </div>
        {isSchedule ? (
          <div>
            <input type="date" name="date" placeholder="Date" />
            <input type="time" name="time" placeholder="Time" />
          </div>
        ) : null}
        <div>
          <input type="submit" value="Schedule" />
          <input type="submit" value="Riding Now" />
        </div>
      </form>
    </div>
  );
};

export default ConnectionForm;
