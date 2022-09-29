export class RoutesUsers {
  constructor(controller, router, middlewareUser) {
    this.controller = controller;
    this.router = router;
    this.middlewareUser = middlewareUser;
  }

  route() {
    this.router.post(
      "/create-user",
      (req, res, next) => {
        this.middlewareUser.create(req, res, next);
      },
      (req, res) => {
        this.controller.createUser(req, res);
      }
    );
    this.router.delete("/delete-user/:id", (req, res) => {
      this.controller.deleteUser(req, res);
    });
    this.router.post("/login-user", (req, res) => {
      this.controller.loginUser(req, res);
    });
    this.router.patch(
      "/update-user/:id",
      (req, res, next) => {
        this.middlewareUser.update(req, res, next);
      },
      (req, res) => {
        this.controller.updateUser(req, res);
      }
    );
    return this.router;
  }
}
