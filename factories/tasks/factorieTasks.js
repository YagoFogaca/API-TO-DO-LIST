import { RepositoryTaks } from "../../database/repositorys/task/repositoryTasks";

import { CreateUsecase } from "../../service/tasks/usecasesTasks/createUsecase";
import { DeleteUsecase } from "../../service/tasks/usecasesTasks/deleteUsecase";
import { UpdateUsecase } from "../../service/tasks/usecasesTasks/updateUsecase";
import { GetAllUsecase } from "../../service/tasks/usecasesTasks/getAllUsecase";
import { GetByIdUsecase } from "../../service/tasks/usecasesTasks/getByIdUsecase";

import { ServiceTaks } from "../../service/tasks/serviceTaks";

import { ControllersTasks } from "../../controllers/tasks/controllerTasks";
import { RoutesTasks } from "../../routes/tasks/routesTasks";

export function factoryTasks(router) {
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
