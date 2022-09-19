import shortid from "shortid";
import validator from "email-validator";

export class Validate {
  static shortId() {
    return shortid.generate().toUpperCase();
  }

  static validateEmail(email) {
    return validator.validate(email);
  }
}
