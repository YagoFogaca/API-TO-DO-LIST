export class ControllersUsers {
  constructor(serviceUser) {
    this.serviceUser = serviceUser;
  }

  async createUser(req, res) {
    try {
      await this.service.createUser(req.body);

      res.status(201).send({ message: "User created successfully" });
    } catch (err) {
      console.log(err);
      res.status(404).send(err.message);
    }
  }

  async deleteUser(req, res) {
    try {
      await this.service.deleteUser(req.params.id);

      res.status(200).send({ message: "User deleted successfully" });
    } catch (err) {
      console.log(err);
      res.status(404).send(err.message);
    }
  }

  async getByEmailUser(req, res) {
    try {
      const user = await this.service.getByEmailUser(req.params.email);

      res.status(200).send(user);
    } catch (err) {
      console.log(err);
      res.status(404).send(err.message);
    }
  }

  async getByIdUser(req, res) {
    try {
      const user = await this.service.getByIdUser(req.params.id);

      res.status(200).send(user);
    } catch (err) {
      console.log(err);
      res.status(404).send(err.message);
    }
  }

  async updateUser(req, res) {
    try {
      const user = await this.service.updateUser(req.body, req.params.id);

      res.status(200).send(user);
    } catch (err) {
      console.log(err);
      res.status(404).send(err.message);
    }
  }
}
