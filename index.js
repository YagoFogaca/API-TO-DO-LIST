import { ConnectionDatabase } from "./database/mongo/connection.js";
import { FactoryTasks } from "./factories/tasks/factorieTasks.js";
import { FactoryUsers } from "./factories/users/factorieUsers.js";
import express, { Router } from "express";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

await ConnectionDatabase.connectionDatabase();

const router = Router();
const app = express();
const tasks = FactoryTasks(router);
const users = FactoryUsers(router);
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use("/task", tasks.route());
app.use("/user", users.route());

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
