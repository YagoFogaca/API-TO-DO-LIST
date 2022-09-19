export class GetAllUsecase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(id_user) {
    const taks = await this.repository.getAll(id_user);
    if (!taks || taks.length === 0) {
      throw new Error("No to registered taks");
    }

    return taks;
  }
}
