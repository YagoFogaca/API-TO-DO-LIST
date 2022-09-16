import shortid from "shortid";
import validator from "email-validator";

export class UserEntity {
  constructor(user) {
    this.id = user.id ?? shortid.generate().toUpperCase();
    this.name = user.name.trim();
    this.email = user.email;
    this.password = user.password;
  }

  validateName() {
    if (this.name.length < 3) {
      throw new Error("Name must be at least 3 characters");
    }
  }

  validateEmail() {
    if (!validator.validate(this.email)) {
      throw new Error("Email is not valid");
    }
  }

  validatePassword() {
    if (this.password.length < 6) {
      throw new Error("Password must be at least 6 characters");
    }
  }

  printUser() {
    const user = {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
    };
    return console.log(user);
  }
}
