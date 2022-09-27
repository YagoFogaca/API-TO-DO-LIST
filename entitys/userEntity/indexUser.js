import { UserEntity } from "./userEntity.js";

export class IndexUserEntity {
  static userEntity(user) {
    const userEntity = new UserEntity(user);
    userEntity.validateName();
    userEntity.validateEmail();
    userEntity.validatePassword();
    return userEntity.printUser();
  }
}
