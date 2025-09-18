import mongoose from "mongoose";

const applicantSchema = mongoose.Schema;

const applicantModel = new applicantSchema({
  name: {
    type: String,
    required: [true, "please provide name"],
  },
  jobTitle: {
    type: String,
    required: [true, "please provide job title"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "please provide email"],
  },
  resume: {
    type: String,
    required: [true, "please provide resume"],
  },
});

const Applicants =
  mongoose.models.applicants || mongoose.model("applicants", applicantModel);

export default Applicants;
