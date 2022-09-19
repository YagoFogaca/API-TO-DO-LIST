export class RepositoryTaks {
  async getAll() {
    return taksDB.find();
  }

  async getById(taksId) {
    return taksDB.findOne({ id: taksId });
  }

  async create(taks) {
    return taksDB.create(taks);
  }

  async update(taks) {
    return taksDB.update(taks);
  }

  async delete(taksId) {
    return taksDB.delete({ id: taksId });
  }
}
