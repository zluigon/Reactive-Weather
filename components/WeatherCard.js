import React from "react";
import weatherHelper, {
  sunny,
  rainy,
  partlyCloudy,
  cloudy,
} from "../utils/weatherHelper";

function WeatherCard({ city }) {
  const weatherIcon = weatherHelper(city.forecast);

  return (
    <div className="card">
      <div className="img-container">
        <img
          className="card-img-top"
          src={weatherIcon}
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">{city.city}</h3>
        <h5 className="card-text">{city.temperature}</h5>
        <h5 className="card-text">{city.forecast}</h5>
      </div>
    </div>
  );
}

// Export the WeatherCard
export default WeatherCard;
