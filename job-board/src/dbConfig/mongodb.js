import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new error("❌ Please define the MONGODB_URI in .env.local");
}

try {
  if (!global._mongoose) {
    global._mongoose = mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
} catch (error) {
  console.log(error);
}

export default global._mongoose;
