import { TaskEntity } from "./tasks.Entity.js";

export class IndexTaksEntity {
  static taksEntity(taks) {
    const taksEntity = new TaskEntity(taks);
    taksEntity.validateTask(taks);
    return taksEntity.printTask();
  }
}
