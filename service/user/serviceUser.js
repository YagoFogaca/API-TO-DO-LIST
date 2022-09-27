export class ServiceUser {
  constructor(createUsecase, deleteUsecase, getByEmailUsecase, getByIdUsecase, updateUsecase) {
    this.createUsecase = createUsecase;
    this.deleteUsecase = deleteUsecase;
    this.getByEmailUsecase = getByEmailUsecase;
    this.updateUsecase = updateUsecase;
  }

  async createUser(user) {
    return await this.createUsecase.execute(user);
  }

  async deleteUser(userId) {
    return await this.deleteUsecase.execute(userId);
  }

  async getByEmailUser(userEmail) {
    return await this.getByEmailUsecase.execute(userEmail);
  }

  async updateUser(user, userId) {
    return await this.updateUsecase.execute(user, userId);
  }
}
