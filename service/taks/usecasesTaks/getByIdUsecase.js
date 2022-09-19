export class GetByIdUsecase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(taksId) {
    const taks = await this.repository.getById(taksId);
    if (!taks) {
      throw new Error("No taks with that id");
    }

    return taks;
  }
}
