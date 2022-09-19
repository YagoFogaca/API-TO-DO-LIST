import { taksDB } from "../../mongo/schemas/schemaTaks/schemaTaks.js";

export class RepositoryTaks {
  static async getAll(id_user) {
    return await taksDB.find({ id_user: id_user });
  }

  static async getById(taksId) {
    return await taksDB.findOne({ id: taksId });
  }

  static async create(taks) {
    return await taksDB.create(taks);
  }

  static async update(taks) {
    return await taksDB.findOneAndUpdate({ id: taks.id }, taks, { new: true });
  }

  static async delete(taksId) {
    return await taksDB.deleteOne({ id: taksId });
  }
}
