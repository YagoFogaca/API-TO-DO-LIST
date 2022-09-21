export class GetAllTasksUserUsecase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(id_user) {
    const taks = await this.repository.getAllTasksUser(id_user);
    if (!taks || taks.length === 0) {
      throw new Error("No to registered taks");
    }

    return taks;
  }
}
