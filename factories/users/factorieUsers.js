import { RepositoryUsers } from "../../database/repositorys/user/repositoryUser.js";
import { CreateUsecase } from "../../service/user/usecasesUser/createUsecase.js";
import { DeleteUsecase } from "../../service/user/usecasesUser/deleteUsecase.js";
import { LoginUsecase } from "../../service/user/usecasesUser/loginUsecase.js";
import { GetByIdUsecase } from "../../service/user/usecasesUser/getByIdUsecase.js";
import { UpdateUsecase } from "../../service/user/usecasesUser/updateUsecase.js";

import { ServiceUser } from "../../service/user/serviceUser.js";
import { ControllersUsers } from "../../controllers/users/controllerUsers.js";
import { RoutesUsers } from "../../routes/users/routesUsers.js";
import { MiddlewareUser } from "../../middlewares/users/middlewareUser.js";
import { Bcrypt } from "../../utils/auth/bcrypt.js";
import { Jwt } from "../../utils/auth/jwt.js";

export function FactoryUsers(router) {
  const createUsecase = new CreateUsecase(RepositoryUsers);
  const deleteUsecase = new DeleteUsecase(RepositoryUsers);
  const loginUsecase = new LoginUsecase(RepositoryUsers);
  const getByIdUsecase = new GetByIdUsecase(RepositoryUsers);
  const updateUsecase = new UpdateUsecase(RepositoryUsers, getByIdUsecase);

  const serviceUsers = new ServiceUser(createUsecase, deleteUsecase, loginUsecase, updateUsecase);

  const controllerUsers = new ControllersUsers(serviceUsers, Bcrypt, Jwt);
  const routesUsers = new RoutesUsers(controllerUsers, router, MiddlewareUser);

  return routesUsers;
}
