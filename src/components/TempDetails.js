import { useSelector } from "react-redux";
import classNames from "classnames";

  

function TempDetails({ children, className, ...rest }) {

    const finalClassName = classNames(
        "border rounded shadow bg-white",
        className
      );

    const myObject = useSelector((state) => {
        return state.response.myObject;
    })
    

  return <div className={finalClassName}{...rest}>
    <h2>Temprature : {myObject.temp}</h2>
    <h2>Feels Like : {myObject.feels_like}</h2>
    <h2>humidity : {myObject.humidity}</h2>
    <h2>Wind Speed: {myObject.windSpeed}</h2>
    <h2>condition : {myObject.condition}</h2>
  </div>;
}

export default TempDetails;
