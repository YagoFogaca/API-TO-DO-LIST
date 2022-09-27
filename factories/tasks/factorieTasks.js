import { RepositoryTaks } from "../../database/repositorys/task/repositoryTasks.js";

import { CreateUsecase } from "../../service/tasks/usecasesTasks/createUsecase.js";
import { DeleteUsecase } from "../../service/tasks/usecasesTasks/deleteUsecase.js";
import { UpdateUsecase } from "../../service/tasks/usecasesTasks/updateUsecase.js";
import { GetAllTasksUserUsecase } from "../../service/tasks/usecasesTasks/getAllUsecase.js";
import { GetByIdUsecase } from "../../service/tasks/usecasesTasks/getByIdUsecase.js";

import { ServiceTaks } from "../../service/tasks/serviceTaks.js";
import { ControllersTasks } from "../../controllers/tasks/controllerTasks.js";
import { RoutesTasks } from "../../routes/tasks/routesTasks.js";
import { MiddlewareTask } from "../../middlewares/tasks/middlewareTasks.js";

export function FactoryTasks(router) {
  const getAllTasksUserUsecase = new GetAllTasksUserUsecase(RepositoryTaks);
  const getByIdUsecase = new GetByIdUsecase(RepositoryTaks);
  const updateUsecase = new UpdateUsecase(RepositoryTaks, getByIdUsecase);
  const createUsecase = new CreateUsecase(RepositoryTaks);
  const deleteUsecase = new DeleteUsecase(RepositoryTaks);

  const serviceTasks = new ServiceTaks(
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
