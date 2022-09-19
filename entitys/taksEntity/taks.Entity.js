import { Validate } from "../../utils/validator/validate.js";

export class TaksEntity {
  constructor(taks) {
    this.id = taks.id ?? Validate.shortId();
    this.id_user = taks.id_user;
    this.day = taks.day;
    this.hour = taks.hour;
    this.taks = taks.taks;
    this.status = taks.status;
    this.description = taks.description ?? "";
  }

  validateTaks() {
    if (!this.id_user || !this.day || !this.hour || !this.taks || !this.status) {
      throw new Error("Some fields were not reported");
    }
  }

  printTaks() {
    return {
      id: this.id,
      id_user: this.id_user,
      day: this.day,
      hour: this.hour,
      taks: this.taks,
      status: this.status,
      description: this.description,
    };
  }
}
