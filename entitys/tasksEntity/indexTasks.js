import { TaskEntity } from "./tasks.Entity.js";

export class IndexTasksEntity {
  static tasksEntity(task) {
    const tasksEntity = new TaskEntity(task);
    tasksEntity.validateTask(task);
    return tasksEntity.printTask();
  }
}
