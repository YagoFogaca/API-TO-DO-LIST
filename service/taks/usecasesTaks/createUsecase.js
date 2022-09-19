import { IndexTaksEntity } from "../../../entitys/taksEntity/indexTaks.js";

export class CreateUsecase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(taks) {
    const taksEntity = IndexTaksEntity.taksEntity(taks);
    const taskCreation = await this.repository.create(taksEntity);

    if (!taskCreation) {
      throw new Error("Task creation failed");
    }

    return taskCreation;
  }
}
