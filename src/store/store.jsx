import { configureStore } from '@reduxjs/toolkit'
import movieReducer from "./reducer/MovieSlice"
import tvReducer from "./reducer/TvSlice"
import peopleReducer from "./reducer/PeopleSlice"

export const store = configureStore({
  reducer: {
    movie:movieReducer,
    tvshow:tvReducer,
    people:peopleReducer
  },
})