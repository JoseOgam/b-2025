import mongoose from "mongoose";
export async function connect() {
  try {
    mongoose.connect(process.env.MONGODB_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("mongodb connected successfully");
    });

    connection.on("error", (error) => {
      console.log("mongo connection error");
      console.error(error);
    });
  } catch (error: any) {
    console.log("something went wrong");
    console.log(error.message);
  }
}
