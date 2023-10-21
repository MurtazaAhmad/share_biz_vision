import mongoose from "mongoose";

const isConnected = false;

export const connectDB = async () => {
  mongoose.set("strictQuery", true); //Warnings in console if not set.

  //   If Already Connected.
  if (isConnected) {
    console.log("Already connected to DB");
    return;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};
