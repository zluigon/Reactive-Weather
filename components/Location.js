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
      const res = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${REACT_APP_API}`
      );
      const data = await res.json();
      const resW = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${data[0].lat}&lon=${data[0].lon}&exclude={current,minutely,hourly,alerts}&appid=${REACT_APP_API}`
      );
      const dataW = await resW.json();

      setWeather(dataW.daily);
      console.log(weather);
    } catch (error) {
      console.error("Error fetching weather data: ", error);
    }
  };

  useEffect(() => {
    fetchCoords();
  }, [location]);

  return (
    <>
      {weather.map((data, i) => {
        <WeatherCard key={i} city={data} />;
      })}
    </>
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
