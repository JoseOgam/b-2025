import mongoose from "mongoose";

const userSchema = mongoose.Schema;

const usersModel = new userSchema({
  username: {
    type: String,
    unique: true,
    required: [true, "please provide username"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "please provide email"],
  },
  password: {
    type: String,
    required: [true, "please provide password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    enum: ["customer", "admin"],
    default: "customer",
  },

  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", usersModel);

export default User;
