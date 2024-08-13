import mongoose from "mongoose";

export const connectToDb = async () => {
  try {
    const MONGODB_URL = process.env.MONGODB_URL;
    await mongoose.connect(MONGODB_URL);
    console.log("Connect to database successfully🚀.");
  } catch (err) {
    console.log(err);
    throw new Error("Error while connecting to Database.");
  }
};
