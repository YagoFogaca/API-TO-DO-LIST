export class GetAllTasksUserUsecase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(id_user) {
    const tasks = await this.repository.getAllTasksUser(id_user);
    if (!tasks) {
      throw new Error("No to registered tasks");
    }

    return tasks;
  }
}
