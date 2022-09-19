import { Schema, model } from "mongoose";

const schemaTaks = new Schema({
  id: { type: String, required: true },
  id_user: { type: String, required: true },
  day: { type: Date, required: true },
  hour: { type: Date, required: true },
  taks: { type: String, required: true },
  status: { type: String, required: true },
  description: { type: String, required: false },
});

export const taksDB = model("Taks", schemaTaks);
