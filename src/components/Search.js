import { useDispatch } from "react-redux";
import { setResponse } from "../store";
import { useFetchWeatherQuery } from "../store/apis/weatherApi";
import { useState } from "react";
import classNames from "classnames";

function Search({ className, ...rest }) {
  const finalClassName = classNames("", className);
  const dispatch = useDispatch();
  var [searchTerm, setSearchTerm] = useState("Indore");
  const [shouldNotFetchData, setShouldNotFetchData] = useState(false);

  // INITIALIZING RESPONSE OBJECT TO RECEIVE DATA FROM API
  const response = {
    cityName: "",
    temp: 0,
    feels_like: 0,
    humidity: 0,
    windSpeed: 0,
    condition: "",
  };

  const handleChange = (event) => {
    const newValue = event.target.value;
    if (newValue.length >= 3) {
      setSearchTerm(newValue);
      setShouldNotFetchData(false);
      try {
        response.cityName = searchTerm;
        response.temp = data.current.temp_c || "";
        response.feels_like = data.current.feelslike_c || "";
        response.humidity = data.current.humidity || "";
        response.windSpeed = data.current.wind_kph || "";
        response.condition = data.current.condition.text || "";
        response.is_day = data.current.is_day || "";
        response.iconCode = data.current.condition.icon || "";
        dispatch(setResponse(response));
        console.error(response);
      } catch (error) {
        if (error) {
          console.error(error);
        }
      }
    } else if (newValue.length < 3) {
      setShouldNotFetchData(false);
      setSearchTerm("");
    }
  };

  // calling WEATHER API
  const { data, error, isLoading } = useFetchWeatherQuery(searchTerm, {
    skip: shouldNotFetchData,
  });

  try {
    response.cityName = searchTerm || "";
    response.temp = data?.current.temp_c || "";
    response.feels_like = data?.current.feelslike_c || "";
    response.humidity = data?.current.humidity || "";
    response.windSpeed = data?.current.wind_kph || "";
    response.condition = data?.current.condition.text || "";
    response.is_day = data?.current.is_day || "";
    response.iconCode = data?.current.condition.icon || "";
    dispatch(setResponse(response));
  } catch (error) {
    if (error) {
      console.log("no error");
    }
  }

  if (response.is_day === 1) {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }
  return (
    <div className={finalClassName} {...rest}>
      <form>
        <label className="mr-3 dark:text-white">Search</label>
        <input
          type="text"
          placeholder={searchTerm}
          onChange={handleChange}
          className="text-black dark:bg-slate-700 dark:text-white rounded shadow"
        />
      </form>
    </div>
  );
}

export default Search;
