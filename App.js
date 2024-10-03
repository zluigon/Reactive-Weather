import React from "react";
import { useState } from "react";
// Import data and WeatherCard here
const cities = require("./data");
import WeatherCard from "./components/WeatherCard";
import Location from "./components/Location";
import Form from "./components/Form";

function App() {
  const [location, setLocation] = useState("");

  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <Form location={location} setLocation={setLocation} />
      <div className="app">
        <Location location={location} setLocation={setLocation} />

        {/* Render components here 
          cities.map((city) => (
            <WeatherCard key={city.city} city={city} />
          ))*/}
      </div>
    </>
  );
}

export default App;
