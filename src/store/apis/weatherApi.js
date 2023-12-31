import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const weatherApi = createApi({
  reducerPath: "weather",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://weather-by-api-ninjas.p.rapidapi.com/v1/",
  }),
  endpoints(builder) {
    return {
      fetchWeather: builder.query({
        query: (name) => {
          return {
            method: "GET",
            url: "https://weatherapi-com.p.rapidapi.com/current.json",
            params: { q: name },
            headers: {
              "X-RapidAPI-Key":
                "5f5a5c804cmsh27e13b075631734p1a7579jsnb2cb29f5f253",
              "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
            },
          };
        },
      }),
      fetchForecast: builder.query({
        query: (name) => {
          return {
            method: "GET",
            url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
            params: {
              q: name,
              days: "3",
            },
            headers: {
              "X-RapidAPI-Key":
                "5f5a5c804cmsh27e13b075631734p1a7579jsnb2cb29f5f253",
              "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
            },
          };
        },
      }),
    };
  },
});

export { weatherApi };
export const { useFetchWeatherQuery, useFetchForecastQuery } = weatherApi;
