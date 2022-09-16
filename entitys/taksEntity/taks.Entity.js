export class TaksEntity {
  constructor(taks) {
    this.id = "";
    this.id_user = taks.id_user;
    this.day = taks.day;
    this.hour = taks.hour;
    this.taks = taks.taks;
    this.status = taks.status;
    this.description = taks.description;
  }
}
