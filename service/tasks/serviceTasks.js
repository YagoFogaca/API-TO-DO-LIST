export class ServiceTasks {
  constructor(getAllTasksUserUsecase, getByIdUsecase, updateUsecase, createUsecase, deleteUsecase) {
    this.getAllTasksUserUsecase = getAllTasksUserUsecase;
    this.getByIdUsecase = getByIdUsecase;
    this.updateUsecase = updateUsecase;
    this.createUsecase = createUsecase;
    this.deleteUsecase = deleteUsecase;
  }

  async getAllTasksUser(id_user) {
    return await this.getAllTasksUserUsecase.execute(id_user);
  }

  async getById(taskId) {
    return await this.getByIdUsecase.execute(taskId);
  }

  async update(task, taskId) {
    return await this.updateUsecase.execute(task, taskId);
  }

  async create(task) {
    return await this.createUsecase.execute(task);
  }

  async delete(taskId) {
    return await this.deleteUsecase.execute(taskId);
  }
}
