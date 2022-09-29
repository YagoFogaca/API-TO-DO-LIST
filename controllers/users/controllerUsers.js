export class ControllersUsers {
  constructor(serviceUser, bcrypt, jwt) {
    this.service = serviceUser;
    this.bcrypt = bcrypt;
    this.jwt = jwt;
  }

  async createUser(req, res) {
    try {
      req.body.password = await this.bcrypt.hashBcrypt(req.body.password);
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

  async loginUser(req, res) {
    try {
      const userBody = req.body;
      const user = await this.service.loginUser(userBody.email);

      this.bcrypt.compareBcrypt(userBody.password, user.password);

      const token = this.jwt.Sing(user);

      res.status(200).send({ user: user, jwToken: token });
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
