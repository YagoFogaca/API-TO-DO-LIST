import { IndexTaksEntity } from "../../../entitys/taksEntity/indexTaks.js";

export class CreateUsecase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(taks) {
    IndexTaksEntity.taksEntity(taks);
    const taskCreation = await this.repository.create(taks);

    if (!taskCreation) {
      throw new Error("Task creation failed");
    }

    return taskCreation;
  }
}
