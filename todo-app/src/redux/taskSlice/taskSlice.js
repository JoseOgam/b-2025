import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    list: ["Jogging"],
  },
  reducers: {
    addTask: (state, action) => {
      state.list.push(action.payload);
    },
    removeTask: (state, action) => {
      state.list = state.list.filter((task, index) => index !== action.payload);
    },
    clearTasks: (state) => {
      state.list = [];
    },
  },
});

export const { addTask, removeTask, clearTasks } = taskSlice.actions;
const taskReducer = taskSlice.reducer;
export default taskReducer;
