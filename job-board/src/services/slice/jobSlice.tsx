import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  jobs: [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechFlow Inc.",
      location: "Remote",
      type: "Full-time",
      salary: "$60k - $80k",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "CloudNet Solutions",
      location: "Nairobi, Kenya",
      type: "Contract",
      salary: "$50/hr",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "PixelPerfect Studio",
      location: "Kisumu",
      type: "Part-time",
      salary: "$25/hr",
    },
    {
      id: 4,
      title: "UI/UX Designer",
      company: "PixelPerfect Studio",
      location: "Nairobi",
      type: "Part-time",
      salary: "$25/hr",
    },
  ],
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = jobSlice.actions;
const jobeducer = jobSlice.reducer;
export default jobeducer;
