import mongoose from "mongoose";

export class ConnectionDatabase {
  static async connectionDatabase() {
    const connection = await mongoose.connect(process.env.DATABASE_URL);
    console.log("Database connection");
    return connection;
  }
}
