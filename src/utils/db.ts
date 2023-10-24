import mongoose from "mongoose";

let isConnected = false;
const { MONGO_URI } = process.env;

export const connectDB = async () => {
  // Warnings in console if not set.
  mongoose.set("strictQuery", true);

  //   If Already Connected.
  if (isConnected) {
    console.log("Already connected to DB");
    return;
  }

  try {
    if (!MONGO_URI) throw new Error("Mongo URI not found");
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions);

    isConnected = true;
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${(error as Error).message}`);
  }
};
