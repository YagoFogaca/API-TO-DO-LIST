export class GetAllUsecase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute() {
    const taks = await this.repository.getAll();
    if (!taks || taks.length === 0) {
      throw new Error("No to registered taks");
    }

    return taks;
  }
}
