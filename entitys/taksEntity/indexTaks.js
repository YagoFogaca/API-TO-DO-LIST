import { TaksEntity } from "./taks.Entity.js";

export class IndexTaksEntity {
  static taksEntity(taks) {
    console.log(taks);
    const taksEntity = new TaksEntity(taks);
    taksEntity.validateTaks();
    return taksEntity.printTaks();
  }
}
