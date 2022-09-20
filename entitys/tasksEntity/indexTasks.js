import { TaksEntity } from "./tasks.Entity.js";

export class IndexTaksEntity {
  static taksEntity(taks) {
    const taksEntity = new TaksEntity(taks);
    taksEntity.validateTaks();
    return taksEntity.printTaks();
  }
}
