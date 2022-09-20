import { Validate } from "../../utils/validator/validate.js";

export class TaskEntity {
  constructor(task) {
    this.id = task.id ?? Validate.shortId();
    this.id_user = task.id_user;
    this.day = task.day;
    this.day_week = task.day_week;
    this.hour = task.hour;
    this.task = task.task;
    this.status = task.status;
    this.description = task.description ?? "";
  }

  validateTask(taks) {
    console.log(taks);
    if (!this.id_user || !this.day || !this.hour || !this.task || !this.status) {
      throw new Error("Some fields were not reported");
    }
  }

  printTask() {
    return {
      id: this.id,
      id_user: this.id_user,
      day: this.day,
      hour: this.hour,
      task: this.task,
      status: this.status,
      description: this.description,
    };
  }
}
