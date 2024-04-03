import mongoose from "mongoose";
import { MONGO_URI } from "../config/index.js";

const connectToDatabase = async () => {
 try {
  await mongoose.connect(MONGO_URI, {
   // useNewUrlParser: true,
   // useUnifiedTopology: true,

  });
  console.log("DB connected.....");
 } catch (ex) {
  console.error("Error connecting to database:", ex);
 }
};

export default connectToDatabase;
