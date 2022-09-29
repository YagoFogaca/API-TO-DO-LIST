import { usersDB } from "../../mongo/schemas/schemaUser/schemaUser.js";

export class RepositoryUsers {
  static async create(user) {
    return await usersDB.create(user);
  }

  static async delete(userID) {
    return await usersDB.deleteOne({ id: userID });
  }

  static async login(userEmail) {
    return await usersDB.findOne({ email: userEmail });
  }

  static async getById(userId) {
    return await usersDB.findOne({ id: userId });
  }

  static async update(user) {
    return await usersDB.findOneAndUpdate({ id: user.id }, user, { new: true });
  }
}
