export class GetByIdUsecase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(userId) {
    const user = await this.repository.getById(userId);
    if (!user) {
      throw new Error("User does not exist");
    }

    return user;
  }
}
