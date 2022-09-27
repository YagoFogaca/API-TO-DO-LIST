import { IndexUserEntity } from "../../../entitys/userEntity/indexUser.js";

export class UpdateUsecase {
  constructor(repository, getByIdUsecase) {
    this.repository = repository;
    this.getByIdUsecase = getByIdUsecase;
  }

  async execute(user, userId) {
    const searchByUser = await this.getByIdUsecase.execute(userId);

    const userModified = Object.assign(searchByUser, user);

    IndexUserEntity.userEntity(userModified);

    const updatedUser = await this.respository.update(userModified);

    if (!updatedUser) {
      throw new Error("For some reason it was not possible to update");
    }

    return updatedUser;
  }
}
