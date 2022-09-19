import { IndexTaksEntity } from "../../../entitys/taksEntity/indexTaks.js";

export class UpdateUsecase {
  constructor(repository, getByIdUsecase) {
    this.repository = repository;
    this.getByIdUsecase = getByIdUsecase;
  }

  async execute(taks) {
    const oldTaks = await this.getByIdUsecase.execute(taks.id);

    const taksModified = Object.assign(oldTaks, taks);
    IndexTaksEntity.taksEntity(taksModified);

    return await this.repository.update(taksModified);
  }
}
