import React, { useEffect, useState } from "react";
import weatherHelper, {
  sunny,
  rainy,
  partlyCloudy,
  cloudy,
} from "../utils/weatherHelper";
import WeatherCard from "./WeatherCard";

const { REACT_APP_API } = process.env;

function Location({ cities, location, setLocation }) {
  const [weather, setWeather] = useState([]);
  const [locationName, setLocationName] = useState("");
  const [error, setError] = useState(null);

  const fetchCoords = async () => {
    if (!location) {
      setError("Search for a location to display forecast information");
      return;
    }

    try {
      setError(null);
      const res = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${REACT_APP_API}`
      );
      const data = await res.json();

      if (data.length > 0) {
        setLocationName(data[0].name);

        const resW = await fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${data[0].lat}&lon=${data[0].lon}&exclude={current,minutely,hourly,alerts}&units=imperial&appid=${REACT_APP_API}`
        );
        const dataW = await resW.json();
        setWeather(dataW.daily);
      } else {
        setError("Location not found");
      }
    } catch (error) {
      setError("Error fetching weather data: " + error);
    }
  };

  useEffect(() => {
    fetchCoords();
  }, [location]);

  return (
    <div>
      {!locationName || locationName.trim() === "" ? null : (
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              <h3>Location: {locationName}</h3>
            </div>
          </div>
        </div>
      )}

      {error && <h3 className="error">{error}</h3>}

      {weather.length > 0
        ? weather.map((day, i) => <WeatherCard key={i} day={day} />)
        : !error && <h3>No weather data available</h3>}
    </div>
  );
}

export default Location;
