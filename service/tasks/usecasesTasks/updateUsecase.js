import { IndexTaksEntity } from "../../../entitys/tasksEntity/indexTasks.js";

export class UpdateUsecase {
  constructor(repository, getByIdUsecase) {
    this.repository = repository;
    this.getByIdUsecase = getByIdUsecase;
  }

  async execute(task, taskId) {
    const oldTask = await this.getByIdUsecase.execute(taskId);

    const taskModified = Object.assign(oldTask, task);
    IndexTaksEntity.taksEntity(taskModified);

    return await this.repository.update(taskModified);
  }
}
