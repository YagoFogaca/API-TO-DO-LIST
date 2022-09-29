import { tasksDB } from "../../mongo/schemas/schemaTasks/schemaTasks.js";

export class RepositoryTasks {
  static async getAllTasksUser(id_user) {
    return await tasksDB.find({ id_user: id_user });
  }

  static async getById(taskId) {
    return await tasksDB.findOne({ id: taskId });
  }

  static async create(task) {
    return await tasksDB.create(task);
  }

  static async update(task) {
    return await tasksDB.findOneAndUpdate({ id: task.id }, task, { new: true });
  }

  static async delete(taskId) {
    return await tasksDB.deleteOne({ id: taskId });
  }
}
