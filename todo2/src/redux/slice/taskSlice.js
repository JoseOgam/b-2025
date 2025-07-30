import { createSlice } from "@reduxjs/toolkit";
const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    list: ["jogging"],
  },
  reducers: {
    addTask: (state, action) => {
      state.list.push(action.payload);
    },
    removeTask: (state, action) => {
      // state.list = state.list.filter((task, index) => index !== action.payload);
      state.list = state.list.filter((task, index) => index !== action.payload);
    },
    clearTask: (state, action) => {
      state.list = [];
    },
  },
});

export const { addTask, removeTask, clearTask } = taskSlice.actions;
const taskReducer = taskSlice.reducer;
export default taskReducer;

console.log("Redux Toolkit works!");
