import { RepositoryUsers } from "../../database/repositorys/user/repositoryUser.js";
import { CreateUsecase } from "../../service/user/usecasesUser/createUsecase.js";
import { DeleteUsecase } from "../../service/user/usecasesUser/deleteUsecase.js";
import { GetByEmailUsecase } from "../../service/user/usecasesUser/getByEmailUsecase.js";
import { GetByIdUsecase } from "../../service/user/usecasesUser/getByIdUsecase.js";
import { UpdateUsecase } from "../../service/user/usecasesUser/updateUsecase.js";

import { ServiceUser } from "../../service/user/serviceUser.js";
import { ControllersUsers } from "../../controllers/users/controllerUsers.js";
import { RoutesUsers } from "../../routes/users/routesUsers.js";
import { MiddlewareUser } from "../../middlewares/users/middlewareUser.js";

export function FactoryUsers(router) {
  const createUsecase = new CreateUsecase(RepositoryUsers);
  const deleteUsecase = new DeleteUsecase(RepositoryUsers);
  const getByEmailUsecase = new GetByEmailUsecase(RepositoryUsers);
  const getByIdUsecase = new GetByIdUsecase(RepositoryUsers);
  const updateUsecase = new UpdateUsecase(RepositoryUsers, getByIdUsecase);

  const serviceUsers = new ServiceUser(createUsecase, deleteUsecase, getByEmailUsecase, updateUsecase);

  const controllerUsers = new ControllersUsers(serviceUsers);
  const routesUsers = new RoutesUsers(controllerUsers, router, MiddlewareUser);

  return routesUsers;
}
