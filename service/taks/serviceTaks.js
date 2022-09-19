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

  async getById(taksId) {
    return await this.getByIdUsecase.execute(taksId);
  }

  async update(taks) {
    return await this.updateUsecase.execute(taks);
  }

  async create(taks) {
    return await this.createUsecase.execute(taks);
  }

  async delete(taksId) {
    return await this.deleteUsecase.execute(taksId);
  }
}
