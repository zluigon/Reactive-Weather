import React from "react";
import weatherHelper, {
  sunny,
  rainy,
  partlyCloudy,
  cloudy,
} from "../utils/weatherHelper";

function WeatherCard({ day }) {
  const getDate = (dt) => {
    const newDate = new Date(dt * 1000);
    return newDate.toDateString();
  };

  return (
    <div className="card">
      <div className="card-body"></div>
      <div className="img-container">
        <img
          className="card-img-top"
          src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">{`${getDate(day.dt)}`}</h3>
        <h5 className="card-text">
          Temp: {parseFloat(day.temp.day).toFixed(1)}&deg;F
        </h5>
        <h5 className="card-text">{day.weather[0].description}</h5>
      </div>
    </div>
  );
}

// Export the WeatherCard
export default WeatherCard;
