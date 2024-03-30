import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info:[]
};

export const PeopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    loadpeople: (state, action) => {
        state.info = action.payload
    },
    removepeople:(state)=>{
        state.info=null
    }
  },
});

// Action creators are generated for each case reducer function
export const {loadpeople , removepeople} = PeopleSlice.actions;

export default PeopleSlice.reducer;
