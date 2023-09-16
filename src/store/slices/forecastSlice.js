import { createSlice } from "@reduxjs/toolkit";

const forecastSlice = createSlice({
  name : 'forecast',
  initialState : {
    myObject : {},
  },
  reducers : {
    setForecast(state, action){
      state = action.payload;
    }
  }
});

export const forecastReducer = forecastSlice.reducer;
export const { setForecast} = forecastSlice.actions;
