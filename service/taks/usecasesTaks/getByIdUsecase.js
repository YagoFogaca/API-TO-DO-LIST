export class GetByIdUsecase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(id) {
    const taks = await this.repository.getById(id);
    if (!taks) {
      throw new Error("No taks with that id");
    }

    return taks;
  }
}
