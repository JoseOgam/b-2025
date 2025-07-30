import { createSlice } from "@reduxjs/toolkit";
const taskSlice = createSlice({
  name: "todo",
  initialState: ["jogging"],
  reducers: {
    addTask: () => {},
    removeTask: () => {},
    clearTask: () => {},
  },
});

export const { addTask, removeTask, clearTask } = taskSlice.actions;
const taskReducer = taskSlice.reducer;
export default taskReducer;
console.log("Redux Toolkit works!");
