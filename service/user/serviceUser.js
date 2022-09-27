export class ServiceUser {
  constructor(createUsecase, deleteUsecase, getByEmailUsecase, getByIdUsecase, updateUsecase) {
    this.createUsecase = createUsecase;
    this.deleteUsecase = deleteUsecase;
    this.getByEmailUsecase = getByEmailUsecase;
    this.getByIdUsecase = getByIdUsecase;
    this.updateUsecase = updateUsecase;
  }

  async createUser(user) {
    return await this.createUsecase(user);
  }

  async deleteUser(userId) {
    return await this.deleteUsecase(userId);
  }

  async getByEmailUser(userEmail) {
    return await this.getByEmailUsecase(userEmail);
  }

  async getByIdUser(userId) {
    return await this.getByIdUsecase(userId);
  }

  async updateUser(user, userId) {
    return await this.updateUsecase(user, userId);
  }
}
