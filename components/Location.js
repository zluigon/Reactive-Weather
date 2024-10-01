import React from "react";
import weatherHelper, {
  sunny,
  rainy,
  partlyCloudy,
  cloudy,
} from "../utils/weatherHelper";

function Location({ cities, location, setLocation }) {
  const data = cities;
  const city = data.find(({ city }) => city === location);

  if (!city) {
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Location not found</h3>
        </div>
      </div>
    );
  }

  const weatherIcon = weatherHelper(city.forecast);

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Your Location's Weather</h3>
      </div>
      <div className="img-container">
        <img
          className="card-img-top"
          src={weatherIcon}
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">The weather in {city.city} is</h3>
        <h5 className="card-text">{city.temperature} C</h5>
        <h5 className="card-text">It is {city.forecast} out today</h5>
      </div>
    </div>
  );
}

export default Location;
