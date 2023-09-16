import { useState } from "react";
import Accordion from "./Accordion";
import { useFetchForecastQuery } from "../store/apis/weatherApi";
import { useSelector, useDispatch } from "react-redux";
import { setForecast } from "../store";

function Forecast() {
  const cityName = useSelector((state) => {
    return state.response.myObject.cityName;
  });

  const forecast = useSelector((state) => {
    return state.forecast;
  });

  const { data, error, isLoading } = useFetchForecastQuery(cityName);

  const dispatch = useDispatch();
  var items;
  var array;
  var contentx;
  if (isLoading) {
    return <div>'isLoading'</div>;
  } else {
    array = data.forecast.forecastday;
    contentx = { maxtemp_c: array[0].day.maxtemp_c ,
      mintemp_c : array[0].day.mintemp_c};
    items = [
      {
        id: Math.random(),
        label: array[0].date,
        content: `Max : ${contentx.maxtemp_c} Min : ${contentx.mintemp_c}`,
      },
    ];

    return <Accordion items={items} />;
  }
}

export default Forecast;
