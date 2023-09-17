import { useSelector } from "react-redux";
import classNames from "classnames";

function TempDetails({ children, className, ...rest }) {
  const finalClassName = classNames(
    "rounded shadow dark:text-white",
    className
  );

  const myObject = useSelector((state) => {
    return state.response.myObject;
  });

  return (
    <div className={finalClassName} {...rest}>
      <table>
      <tbody>
        <tr>
          <td>Temprature</td>
          <td> : </td>
          <td>{myObject.temp}°C</td>
        </tr>
        <tr>
          <td>Feels Like</td>
          <td> : </td>
          <td>{myObject.feels_like}°C</td>
        </tr>
        <tr>
          <td>Humidity</td>
          <td> : </td>
          <td>{myObject.humidity}%</td>
        </tr>
        <tr>
          <td>Wind Speed</td>
          <td> : </td>
          <td>{myObject.windSpeed}km/h</td>
        </tr>
        <tr>
          <td>Condition</td>
          <td> : </td>
          <td>{myObject.condition}</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TempDetails;
