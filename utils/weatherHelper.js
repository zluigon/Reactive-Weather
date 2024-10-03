import sunny from "../assets/Sunny.svg";
import rainy from "../assets/Rainy.svg";
import partlyCloudy from "../assets/PartlyCloudy.svg";
import cloudy from "../assets/Cloudy.svg";

function weatherHelper(weather) {
  return weather === "Sunny"
    ? sunny
    : weather === "Rainy"
    ? rainy
    : weather === "Partly cloudy"
    ? partlyCloudy
    : weather === "Cloudy"
    ? cloudy
    : null;
}

export { sunny, rainy, partlyCloudy, cloudy };

export default weatherHelper;
