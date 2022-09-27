import bcrypt from "bcrypt";
export class Bcrypt {
  static hashBcrypt(password) {
    return bcrypt.hashSync(password, 10);
  }

  static compareBcrypt(password, passwordCompare) {
    const compareHash = bcrypt.compareSync(password, passwordCompare);
    if (!compareHash) {
      throw new Error("Invalid password");
    }

    return compareHash;
  }
}
