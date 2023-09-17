import { useState } from "react";
import Accordion from "./Accordion";
import { useFetchForecastQuery } from "../store/apis/weatherApi";
import { useSelector, useDispatch } from "react-redux";
import { setForecast } from "../store";
import classNames from "classnames";
import Skeleton from "./Skeleton";

function Forecast({className,...rest}) {
  const finalClassName = classNames("",className);

  const cityName = useSelector((state) => {
    return state.response.myObject.cityName;
  });

  const forecast = useSelector((state) => {
    return state.forecast;
  });

  const { data, error, isLoading } = useFetchForecastQuery(cityName);

  const dispatch = useDispatch();
  var items = [];
  var array;
  var contentx;
  if (isLoading) {
    return <Skeleton times={3} className="h-10 w-1/2 max-w-sm mx-auto borderrounded-xl" />;
  } else {
    
    array = data.forecast.forecastday;
    array.forEach((element) => {

      items.push({
        id: Math.random(),
        label: element.date,
        content: `Max : ${element.day.maxtemp_c} Min : ${element.day.mintemp_c}`,
      });
    });
    return <div className={finalClassName}{...rest}><Accordion items={items}/>
    </div>
    }

}

export default Forecast;
