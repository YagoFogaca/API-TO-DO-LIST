import { IndexTasksEntity } from "../../../entitys/tasksEntity/indexTasks.js";

export class CreateUsecase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(task) {
    const tasksEntity = IndexTasksEntity.tasksEntity(task);
    const taskCreation = await this.repository.create(tasksEntity);

    if (!taskCreation) {
      throw new Error("Task creation failed");
    }

    return taskCreation;
  }
}
