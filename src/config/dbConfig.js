import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";

async function connectDB() {
    try {
        await mongoose.connect(DB_URL);
        console.log(`MongoDB connected !! DB HOST: `);
    } catch (error) {
        console.log("MongoDB connection failed");
        console.error(error);
    }
}


export {connectDB}