export class ControllersTasks {
  constructor(service) {
    this.service = service;
  }

  async createTasks(req, res) {
    try {
      await this.service.create(req.body);

      res.status(201).send({ message: "Task created successfully" });
    } catch (err) {
      console.log(err);
      res.status(404).send(err.message);
    }
  }

  async deleteTask(req, res) {
    try {
      const resService = await this.service.delete(req.params.id);

      res.satus(200).send({ message: resService });
    } catch (err) {
      console.log(err);
      res.status(404).send(err.message);
    }
  }

  async getAll(req, res) {
    try {
      const resService = await this.service.getAll(req.params.id_user);

      res.satus(200).send(resService);
    } catch (err) {
      console.log(err);
      res.status(404).send(err.message);
    }
  }

  async getById(req, res) {
    try {
      const resService = await this.service.getById(req.params.id);

      res.status(200).res(resService);
    } catch (err) {
      console.log(err);
      res.status(404).send(err.message);
    }
  }

  async update(req, res) {
    try {
      const resService = await this.service.update(req.body, req.params.id);

      res.satus(200).send(resService);
    } catch (err) {
      console.log(err);
      res.status(404).send(err.message);
    }
  }
}
