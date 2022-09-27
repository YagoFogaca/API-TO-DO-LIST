export class RoutesTasks {
  constructor(controller, router, middlewareTask) {
    this.controller = controller;
    this.router = router;
    this.middlewareTask = middlewareTask;
  }

  route() {
    this.router.post(
      "/create-tasks",
      (req, res, next) => {
        this.middlewareTask.create(req, res, next);
      },
      (req, res) => {
        this.controller.createTasks(req, res);
      }
    );
    this.router.delete("/delete-tasks/:id", (req, res) => {
      this.controller.deleteTask(req, res);
    });
    this.router.get("/get-tasks/:id_user", (req, res) => {
      this.controller.getAllTasksUser(req, res);
    });
    this.router.get("/get-task/:id", (req, res) => {
      this.controller.getById(req, res);
    });
    this.router.patch(
      "/update-task/:id",
      (req, res, next) => {
        this.middlewareTask.update(req, res, next);
      },
      (req, res) => {
        this.controller.update(req, res);
      }
    );

    return this.router;
  }
}
