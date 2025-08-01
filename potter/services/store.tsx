import { configureStore } from "@reduxjs/toolkit";
import charactersReducers from "./redux/slice";

const store = configureStore({
  reducer: {
    characters: charactersReducers,
  },
});

export default store;
