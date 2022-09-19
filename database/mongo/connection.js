import mongoose from "mongoose";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

export class ConnectionDatabase {
  static async connectionDatabase() {
    const connection = await mongoose.connect(process.env.DATABASE_URL);
    console.log("Database connection");
    return connection;
  }
}
