import { IndexTaksEntity } from "../../../entitys/tasksEntity/indexTasks.js";

export class CreateUsecase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(task) {
    const taksEntity = IndexTaksEntity.taksEntity(task);
    const taskCreation = await this.repository.create(taksEntity);

    if (!taskCreation) {
      throw new Error("Task creation failed");
    }

    return taskCreation;
  }
}
