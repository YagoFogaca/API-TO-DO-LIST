export class GetByIdUsecase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(taskId) {
    const tasks = await this.repository.getById(taskId);
    if (!tasks) {
      throw new Error("No task with that id");
    }

    return tasks;
  }
}
