import React from "react";
// Import data and WeatherCard here
const cities = require("./data");
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <div className="app">
        {
          /* Render components here */
          cities.map((city) => (
            <WeatherCard key={city.city} props={city} />
          ))
        }
      </div>
    </>
  );
}

export default App;
