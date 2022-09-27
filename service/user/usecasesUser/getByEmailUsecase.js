export class GetByEmailUsecase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(userEmail) {
    const user = await this.repository.getByEmail(userEmail);
    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }
}
