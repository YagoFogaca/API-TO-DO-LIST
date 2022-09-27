import { Validate } from "../../utils/validator/validate.js";

export class TaskEntity {
  constructor(task) {
    this.id = task.id ?? Validate.shortId();
    this.id_user = task.id_user;
    this.day_week = task.day_week;
    this.hour = task.hour;
    this.task = task.task;
    this.status = task.status;
  }

  validateTask() {
    if (!this.id_user || !this.day_week || !this.hour || !this.task || !this.status.toString()) {
      throw new Error("Some fields were not reported");
    }
  }

  printTask() {
    return {
      id: this.id,
      id_user: this.id_user,
      hour: this.hour,
      task: this.task,
      status: this.status,
      day_week: this.day_week,
    };
  }
}
