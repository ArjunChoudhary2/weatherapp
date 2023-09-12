import { createSlice } from "@reduxjs/toolkit";

const responseSlice = createSlice({
  name: "response",
  initialState: {
    myObject: {
        current : {condition : 'sunny',
        is_Day : 1,
        code : 113}
      },
  },
  reducers : {
    setResponse(state, action){
        state.myObject = action.payload;
    }
  }

});

export const responseReducer = responseSlice.reducer;
export const {setResponse} =responseSlice.actions;
