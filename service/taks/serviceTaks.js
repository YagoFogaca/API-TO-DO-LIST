export class ServiceTaks {
  constructor(getAll, getById, update, create, deleteId) {
    this.getAll = getAll;
    this.getById = getById;
    this.update = update;
    this.create = create;
    this.deleteId = deleteId;
  }

  async getAll() {
    return await this.getAll.execute();
  }

  async getById(taksId) {
    return await this.getById.execute(id);
  }

  async update(taks) {
    return await this.update.execute(taks);
  }

  async create(taks) {
    return await this.create.execute(taks);
  }

  async delete(taksId) {
    return await this.deleteId.execute(taksId);
  }
}
