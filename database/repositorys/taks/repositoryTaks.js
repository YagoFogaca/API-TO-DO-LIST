import { taksDB } from "../../mongo/schemas/schemaTaks/schemaTaks";

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
    return taksDB.findByIdAndUpdate(taks);
  }

  async delete(taksId) {
    return taksDB.deleteOne({ id: taksId });
  }
}
