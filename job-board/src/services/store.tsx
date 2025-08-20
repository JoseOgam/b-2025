import { configureStore } from "@reduxjs/toolkit";
import jobeducer from "./slice/jobSlice";

const store = configureStore({
  reducer: {
    jobs: jobeducer,
  },
});

export default store;
