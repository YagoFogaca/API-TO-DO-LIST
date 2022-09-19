export class DeleteUsecase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(taksId) {
    const taksDeleted = await this.repository.delete(taksId);
    if (!taksDeleted) {
      throw new Error("Taks not found");
    }

    return "Taks deleted successfully";
  }
}
