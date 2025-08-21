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
      responsibilities: [
        "Develop and maintain responsive web applications",
        "Collaborate with designers and backend engineers to deliver high-quality products",
        "Write clean, maintainable, and scalable code",
        "Participate in code reviews and contribute to best practices",
      ],
      requirements: [
        "Bachelor’s degree in Computer Science or equivalent experience",
        "Proficiency in JavaScript, TypeScript, and React",
        "Experience with Redux or other state management tools",
        "Knowledge of REST APIs and integration",
        "Strong problem-solving skills and attention to detail",
      ],
      benefits: [
        "Health insurance",
        "Remote-friendly work policy",
        "Flexible working hours",
        "Career development opportunities",
      ],
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "CloudNet Solutions",
      location: "Nairobi, Kenya",
      type: "Contract",
      salary: "$50/hr",
      responsibilities: [
        "Develop and maintain responsive web applications",
        "Collaborate with designers and backend engineers to deliver high-quality products",
        "Write clean, maintainable, and scalable code",
        "Participate in code reviews and contribute to best practices",
      ],
      requirements: [
        "Bachelor’s degree in Computer Science or equivalent experience",
        "Proficiency in JavaScript, TypeScript, and React",
        "Experience with Redux or other state management tools",
        "Knowledge of REST APIs and integration",
        "Strong problem-solving skills and attention to detail",
      ],
      benefits: [
        "Health insurance",
        "Remote-friendly work policy",
        "Flexible working hours",
        "Career development opportunities",
      ],
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "PixelPerfect Studio",
      location: "Kisumu",
      type: "Part-time",
      salary: "$25/hr",
      responsibilities: [
        "Develop and maintain responsive web applications",
        "Collaborate with designers and backend engineers to deliver high-quality products",
        "Write clean, maintainable, and scalable code",
        "Participate in code reviews and contribute to best practices",
      ],
      requirements: [
        "Bachelor’s degree in Computer Science or equivalent experience",
        "Proficiency in JavaScript, TypeScript, and React",
        "Experience with Redux or other state management tools",
        "Knowledge of REST APIs and integration",
        "Strong problem-solving skills and attention to detail",
      ],
      benefits: [
        "Health insurance",
        "Remote-friendly work policy",
        "Flexible working hours",
        "Career development opportunities",
      ],
    },
    {
      id: 4,
      title: "UI/UX Designer",
      company: "PixelPerfect Studio",
      location: "Nairobi",
      type: "Part-time",
      salary: "$25/hr",
      responsibilities: [
        "Develop and maintain responsive web applications",
        "Collaborate with designers and backend engineers to deliver high-quality products",
        "Write clean, maintainable, and scalable code",
        "Participate in code reviews and contribute to best practices",
      ],
      requirements: [
        "Bachelor’s degree in Computer Science or equivalent experience",
        "Proficiency in JavaScript, TypeScript, and React",
        "Experience with Redux or other state management tools",
        "Knowledge of REST APIs and integration",
        "Strong problem-solving skills and attention to detail",
      ],
      benefits: [
        "Health insurance",
        "Remote-friendly work policy",
        "Flexible working hours",
        "Career development opportunities",
      ],
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
