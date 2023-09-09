import { useSelector,useDispatch } from "react-redux";
import { addSearchTerm } from "../store";
import { useFetchWeatherQuery } from "../store/apis/weatherApi";

function Search(){
    const dispatch = useDispatch();
    const searchTerm = useSelector((state)=> {
        return state.search.searchTerm;
    });
   
    const handleSearch = (event) => {
          dispatch(addSearchTerm(event.target.value));
    }

    // 
    let currentTemp = 0;
    const {data, error, isLoading}  = useFetchWeatherQuery(searchTerm);

    try {
        
        currentTemp = data.temp;
        console.error(currentTemp);
    } catch (error) {
        console.error(error);
    }
    
    
    

    return <div>
        <form>
            <h2>Search</h2>
            <input type="text" value={searchTerm} onChange={handleSearch}/>
            <h1 >Output : {currentTemp} </h1>
        </form>
    </div>
}

export default Search;