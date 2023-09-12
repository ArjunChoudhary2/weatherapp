import {createSlice } from '@reduxjs/toolkit';


const inputSlice = createSlice({
    name:'search',
    initialState: {
        searchTerm : 'Indore',
    },
    reducers : {
        addSearchTerm(state, action){
            state.searchTerm = action.payload;
        }
    }
});

export const {addSearchTerm} = inputSlice.actions;
export const inputReducer = inputSlice.reducer;