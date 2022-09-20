import { ConnectionDatabase } from "./database/mongo/connection";
import { FactoryTasks } from "./factories/tasks/factorieTasks";
import express, { Router } from "express";
import cors from "cors";

await ConnectionDatabase.connectionDatabase();

const router = Router();
const app = express();
const tasks = FactoryTasks(router);
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use("/taks", tasks.route());

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
