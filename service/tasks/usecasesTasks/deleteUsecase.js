export class DeleteUsecase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(taskId) {
    const taskDeleted = await this.repository.delete(taskId);
    if (!taskDeleted) {
      throw new Error("Task not found");
    }

    return "Task deleted successfully";
  }
}
