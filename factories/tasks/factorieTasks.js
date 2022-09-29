import { RepositoryTasks } from "../../database/repositorys/task/repositoryTasks.js";

import { CreateUsecase } from "../../service/tasks/usecasesTasks/createUsecase.js";
import { DeleteUsecase } from "../../service/tasks/usecasesTasks/deleteUsecase.js";
import { UpdateUsecase } from "../../service/tasks/usecasesTasks/updateUsecase.js";
import { GetAllTasksUserUsecase } from "../../service/tasks/usecasesTasks/getAllUsecase.js";
import { GetByIdUsecase } from "../../service/tasks/usecasesTasks/getByIdUsecase.js";

import { ServiceTasks } from "../../service/tasks/serviceTasks.js";
import { ControllersTasks } from "../../controllers/tasks/controllerTasks.js";
import { RoutesTasks } from "../../routes/tasks/routesTasks.js";
import { MiddlewareTask } from "../../middlewares/tasks/middlewareTasks.js";

export function FactoryTasks(router) {
  const getAllTasksUserUsecase = new GetAllTasksUserUsecase(RepositoryTasks);
  const getByIdUsecase = new GetByIdUsecase(RepositoryTasks);
  const updateUsecase = new UpdateUsecase(RepositoryTasks, getByIdUsecase);
  const createUsecase = new CreateUsecase(RepositoryTasks);
  const deleteUsecase = new DeleteUsecase(RepositoryTasks);

  const serviceTasks = new ServiceTasks(
    getAllTasksUserUsecase,
    getByIdUsecase,
    updateUsecase,
    createUsecase,
    deleteUsecase
  );

  const controllerTasks = new ControllersTasks(serviceTasks);
  const routesTasks = new RoutesTasks(controllerTasks, router, MiddlewareTask);

  return routesTasks;
}
