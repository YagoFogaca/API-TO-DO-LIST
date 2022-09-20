export class DeleteUsecase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(taskId) {
    const taksDeleted = await this.repository.delete(taskId);
    if (!taksDeleted) {
      throw new Error("Taks not found");
    }

    return "Taks deleted successfully";
  }
}
