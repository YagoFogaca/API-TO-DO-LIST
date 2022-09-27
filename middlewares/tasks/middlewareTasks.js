export class MiddlewareTask {
  static create(req, res, next) {
    try {
      const user = req.body;
      if (!user.id_user || !user.day_week || !user.hour || !user.task || !user.status) {
        throw new Error("Request body not defined");
      }

      next();
    } catch (err) {
      console.log(err);
      res.status(404).send({ message: err.message });
    }
  }

  static update(req, res, next) {
    try {
      if (!req.body) {
        throw new Error("Request body not defined");
      }

      next();
    } catch (err) {
      console.log(err);
      res.status(404).send({ message: err.message });
    }
  }
}
