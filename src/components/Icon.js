import {
  TiWeatherCloudy,
  TiWeatherSunny,
  TiWeatherSnow,
  TiWeatherStormy,
  TiWeatherShower,
  TiWeatherDownpour,
} from "react-icons/ti";

function Icon({ weatherType }) {
  if (weatherType === "cloudy") {
    return <TiWeatherCloudy size={200} />;
  } else if (weatherType === "sunny") {
    return <TiWeatherSunny size={200} />;
  } else if (weatherType === "snow") {
    return <TiWeatherSnow size={200} />;
  } else if (weatherType === "stormy") {
    return <TiWeatherStormy size={200} />;
  } else if (weatherType === "shower") {
    return <TiWeatherShower size={200} />;
  } else if (weatherType === "downpour") {
    return <TiWeatherDownpour size={200} />;
  }
}
export default Icon;
