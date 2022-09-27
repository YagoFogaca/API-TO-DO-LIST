import { IndexUserEntity } from "../../../entitys/userEntity/indexUser.js";
export class CreateUsecase {
  constructor(repository, getByEmailUsecase) {
    this.repository = repository;
    this.getByEmailUsecase = getByEmailUsecase;
  }

  async execute(user) {
    IndexUserEntity(user);

    const verifyUser = await this.getByEmailUsecase(user.email);
    if (verifyUser) {
      throw new Error("Email is already registered");
    }

    const userCreation = await this.repository.create(user);
    if (!userCreation) {
      throw new Error("For some reason it was not possible to register");
    }

    return userCreation;
  }
}
