import jwt from "jsonwebtoken";

export class Jwt {
  static Sing(user) {
    return jwt.sign({ user }, process.env.SECRET, {
      expiresIn: "12h",
    });
  }

  static Verify(token) {
    const verify = jwt.verify(token, process.env.SECRET);
    console.log(verify);
  }
}
