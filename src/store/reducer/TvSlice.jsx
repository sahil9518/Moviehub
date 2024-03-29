import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info:[]
};

export const tvSlice = createSlice({
  name: "tvshow",
  initialState,
  reducers: {
    loadtv: (state, action) => {
        state.info = action.payload
    },
    removetv:(state)=>{
        state.info=null
    }
  },
});

// Action creators are generated for each case reducer function
export const {loadtv , removetv} = tvSlice.actions;

export default tvSlice.reducer;
