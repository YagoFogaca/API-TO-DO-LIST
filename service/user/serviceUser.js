export class ServiceUser {
  constructor(createUsecase, deleteUsecase, LoginUsecase, updateUsecase) {
    this.createUsecase = createUsecase;
    this.deleteUsecase = deleteUsecase;
    this.LoginUsecase = LoginUsecase;
    this.updateUsecase = updateUsecase;
  }

  async createUser(user) {
    return await this.createUsecase.execute(user);
  }

  async deleteUser(userId) {
    return await this.deleteUsecase.execute(userId);
  }

  async loginUser(userEmail) {
    return await this.LoginUsecase.execute(userEmail);
  }

  async updateUser(user, userId) {
    return await this.updateUsecase.execute(user, userId);
  }
}
