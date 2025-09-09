import mongoose from "mongoose";
const jobsSchema = mongoose.Schema;

const jobsModel = new jobsSchema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  responsibilities: {
    type: String,
    required: true,
  },
  requirements: {
    type: String,
    required: true,
  },
  benefits: {
    type: String,
    required: true,
  },
});

const Jobs = mongoose.models.Jobs || mongoose.model("jobs", jobsModel);

export default Jobs;
