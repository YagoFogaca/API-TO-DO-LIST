import { UserEntity } from "./entitys/userEntity/userEntity.js";

const user = {
  name: "Yago",
  email: "yagofogaca20@gmail.com",
  password: "1234567890",
};

const userEntity = new UserEntity(user);

userEntity.validateName();
userEntity.validatePassword();
userEntity.validateEmail();
userEntity.printUser();
