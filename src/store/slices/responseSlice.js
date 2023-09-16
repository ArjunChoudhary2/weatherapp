import { createSlice } from "@reduxjs/toolkit";

const responseSlice = createSlice({
  name: "response",
  initialState: {
    myObject: {
      current: {
        feels_like: "",
        humidity: "",
        temp_c: "",
        condition: "sunny",
        is_Day: '',
        code: '',
        wind_kph : '',
        text : '',
        icon : '',
      },
    },
  },
  reducers: {
    setResponse(state, action) {
      state.myObject = action.payload;
    },
  },
});

export const responseReducer = responseSlice.reducer;
export const { setResponse } = responseSlice.actions;
