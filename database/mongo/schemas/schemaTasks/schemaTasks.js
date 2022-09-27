import { Schema, model } from "mongoose";

const schemaTask = new Schema({
  id: { type: String, required: true },
  id_user: { type: String, required: true },
  day_week: { type: String, required: true },
  hour: { type: String, required: true },
  task: { type: String, required: true },
  status: { type: Boolean, required: true },
});

export const tasksDB = model("Taks", schemaTask);
