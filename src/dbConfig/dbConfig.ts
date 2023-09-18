import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected");
    });
    connection.on("error", (error) => {
      console.log("COnnection failed " + error);
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong");
  }
}
