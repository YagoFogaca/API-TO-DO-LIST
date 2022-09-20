import { RepositoryTaks } from "../../database/repositorys/task/repositoryTasks.js";

import { CreateUsecase } from "../../service/tasks/usecasesTasks/createUsecasejs";
import { DeleteUsecase } from "../../service/tasks/usecasesTasks/deleteUsecasejs";
import { UpdateUsecase } from "../../service/tasks/usecasesTasks/updateUsecasejs";
import { GetAllUsecase } from "../../service/tasks/usecasesTasks/getAllUsecasejs";
import { GetByIdUsecase } from "../../service/tasks/usecasesTasks/getByIdUsecasejs";

import { ServiceTaks } from "../../service/tasks/serviceTaksjs";

import { ControllersTasks } from "../../controllers/tasks/controllerTasksjs";
import { RoutesTasks } from "../../routes/tasks/routesTasksjs";

export function FactoryTasks(router) {
  const getAllUsecase = new GetAllUsecase(RepositoryTaks);
  const getByIdUsecase = new GetByIdUsecase(RepositoryTaks);
  const updateUsecase = new UpdateUsecase(RepositoryTaks, getByIdUsecase);
  const createUsecase = new CreateUsecase(RepositoryTaks);
  const deleteUsecase = new DeleteUsecase(RepositoryTaks);

  const serviceTasks = new ServiceTaks(getAllUsecase, getByIdUsecase, updateUsecase, createUsecase, deleteUsecase);

  const controllerTasks = new ControllersTasks(serviceTasks);
  const routesTasks = new RoutesTasks(controllerTasks, router);

  return routesTasks;
}
