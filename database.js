import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // await mongoose.connect(`${process.env.MONGODB_URI}/codeit`);
    mongoose.connect('mongodb://localhost:27017/codeit')

    console.log("MongoDB connected successfully...");
  } catch (error) {
    console.log(error.message);

    process.exit(1);
  }
};

export default connectDB;