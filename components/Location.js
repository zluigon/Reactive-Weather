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
  //   const [coords, setCoords] = useState({});
  const [weather, setWeather] = useState([]);

  //   const data = cities;
  //   const city = data.find(({ city }) => city === location);

  //   if (!city) {
  //     return (
  //       <div className="card">
  //         <div className="card-body">
  //           <h3 className="card-title">Location not found</h3>
  //         </div>
  //       </div>
  //     );
  //   }

  //   const weatherIcon = weatherHelper(city.forecast);

  const fetchCoords = async () => {
    if (!location) {
      console.log("No Location");
      return;
    }

    try {
      // Fetch location coordinates
      const res = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${REACT_APP_API}`
      );
      const data = await res.json();

      if (data.length > 0) {
        // Fetch weather data based on the location's coordinates
        const resW = await fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${data[0].lat}&lon=${data[0].lon}&exclude=current,minutely,hourly,alerts&appid=${REACT_APP_API}`
        );
        const dataW = await resW.json();
        
        setWeather(dataW.daily);
        console.log("Fetched weather: ", dataW.daily);
      } else {
        console.log("Location not found");
      }
    } catch (error) {
      console.error("Error fetching weather data: ", error);
    }
  };


  useEffect(() => {
    fetchCoords();
  }, [location]);

  return (
    <div>
      {/* Render weather data */}
      {weather.length > 0 ? (
        weather.map((day, index) => (
          <div key={index}>
            <p>{`Day ${index + 1}: ${day.weather[0].description}`}</p>
          </div>
        ))
      ) : (
        <p>No weather data available</p>
      )}
    </div>
  );
  //   return (
  //     <div className="card">
  //       <div className="card-body">
  //         <h3 className="card-title">Your Location's Weather</h3>
  //       </div>
  //       <div className="img-container">
  //         <img className="card-img-top" src={""} alt="Card image cap" id="icon" />
  //       </div>
  //       <div className="card-body">
  //         <h3 className="card-title">The weather in {city.city} is</h3>
  //         <h5 className="card-text">{city.temperature} C</h5>
  //         <h5 className="card-text">It is {city.forecast} out today</h5>
  //       </div>
  //     </div>
  //   );
}

export default Location;
