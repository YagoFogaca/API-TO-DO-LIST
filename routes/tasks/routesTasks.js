export class RoutesTasks {
  constructor(controller, router) {
    this.controller = controller;
    this.router = router;
  }

  route() {
    this.router.post("/create-tasks", (req, res) => {
      this.controller.createTasks(req, res);
    });
    this.router.delete("/delete-tasks", (req, res) => {
      this.controller.deleteTasks(req, res);
    });
    this.router.get("/get-tasks", (req, res) => {
      this.controller.getAll(req, res);
    });
    this.router.get("/get-task/:id", (req, res) => {
      this.controller.getById(req, res);
    });
    this.router.patch("/update-task/:id", (req, res) => {
      this.controller.update(req, res);
    });

    return this.router;
  }
}
