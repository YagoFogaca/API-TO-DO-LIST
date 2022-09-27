import { Schema, model } from "mongoose";

const schemaUser = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String, required: true },
});

export const usersDB = model("Users", schemaUser);
