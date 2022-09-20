export class GetByIdUsecase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(taskId) {
    const taks = await this.repository.getById(taskId);
    if (!taks) {
      throw new Error("No task with that id");
    }

    return taks;
  }
}
