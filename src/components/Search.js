import { useSelector, useDispatch } from "react-redux";
import { addSearchTerm, setResponse } from "../store";
import { useFetchWeatherQuery } from "../store/apis/weatherApi";

function Search() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.search.searchTerm;
  });

  let localSearchTerm = '';

  const handleSearch = (event) => {
    dispatch(addSearchTerm(event.target.value));
  };


  //
  const response = {
    temp: 0,
    feels_like: 0,
    humidity: 0,
    windSpeed: 0,
    condition : '',
  };
  const { data, error, isLoading } = useFetchWeatherQuery(searchTerm);

  try {
    response.temp = data.current.temp_c;
    response.feels_like = data.current.feelslike_c;
    response.humidity = data.current.humidity;
    response.windSpeed = data.current.wind_kph;
    response.condition = data.current.condition.text;
    response.is_day =  data.current.is_day;
    response.iconCode =  data.current.condition.icon;
    dispatch(setResponse(response));
    console.error(response);
  } catch (error) {
    console.error(error);
  }

  return (
    <div>
      <form>
        <label>Search</label>
        <input type="text" value={searchTerm} onChange={handleSearch}/>
        <button  >Search</button>
      </form>
    </div>
  );
}

export default Search;
