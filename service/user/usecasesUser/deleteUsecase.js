export class DeleteUsecase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(userId) {
    const userDeleted = await this.repository.delete(userId);
    if (!userDeleted) {
      throw new Error("For some reason it was not possible to delete");
    }

    return userDeleted;
  }
}
