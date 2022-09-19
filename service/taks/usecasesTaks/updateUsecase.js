import { IndexTaksEntity } from "../../../entitys/taksEntity/indexTaks";

export class UpdateUsecase {
  constructor(repository, getById) {
    this.repository = repository;
    this.getById = getById;
  }

  async execute(taks) {
    const oldTaks = await this.getById(taks.id);

    const taksModified = Object.assign(oldTaks, taks);
    IndexTaksEntity.taksEntity(taksModified);

    return await this.repository.update(taksModified);
  }
}
