export class ServiceTaks {
  constructor(getAllUsecase, getByIdUsecase, updateUsecase, createUsecase, deleteUsecase) {
    this.getAllUsecase = getAllUsecase;
    this.getByIdUsecase = getByIdUsecase;
    this.updateUsecase = updateUsecase;
    this.createUsecase = createUsecase;
    this.deleteUsecase = deleteUsecase;
  }

  async getAll(id_user) {
    return await this.getAllUsecase.execute(id_user);
  }

  async getById(taskId) {
    return await this.getByIdUsecase.execute(taskId);
  }

  async update(task) {
    return await this.updateUsecase.execute(task);
  }

  async create(task) {
    return await this.createUsecase.execute(task);
  }

  async delete(taskId) {
    return await this.deleteUsecase.execute(taskId);
  }
}
