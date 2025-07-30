import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice/taskSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
