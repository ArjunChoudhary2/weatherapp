import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "./apis/weatherApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { setResponse, responseReducer } from "./slices/responseSlice";

const store = configureStore({
  reducer: {
    [weatherApi.reducerPath] : weatherApi.reducer,
    response : responseReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

setupListeners(store.dispatch)
export { store };
export { setResponse };
