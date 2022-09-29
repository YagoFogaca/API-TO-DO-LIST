export class LoginUsecase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(userEmail) {
    const user = await this.repository.login(userEmail);
    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }
}
