import { configureStore } from "@reduxjs/toolkit";
import { addSearchTerm, inputReducer } from "./slices/inputSlice";
import { weatherApi } from "./apis/weatherApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";


const store = configureStore({
  reducer: {
    search: inputReducer,
    [weatherApi.reducerPath] : weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

setupListeners(store.dispatch)
export { store };
export { addSearchTerm };
