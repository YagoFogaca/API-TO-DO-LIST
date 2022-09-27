import { IndexUserEntity } from "../../../entitys/userEntity/indexUser.js";
export class CreateUsecase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(user) {
    const userVerify = IndexUserEntity.userEntity(user);

    const verifyUser = await this.repository.getByEmail(userVerify.email);
    if (verifyUser) {
      throw new Error("Email is already registered");
    }

    const userCreation = await this.repository.create(userVerify);
    if (!userCreation) {
      throw new Error("For some reason it was not possible to register");
    }

    return userCreation;
  }
}
