import { Router } from "express";
import { TaskControllers } from "../controllers";

const tasksRouter = Router();

const taskController = new TaskControllers();

tasksRouter.post("", taskController.create);
// tasksRouter.get("", taskController.get);
// tasksRouter.get("", taskController.getMany);
// tasksRouter.patch("", taskController.update);
// tasksRouter.delete("", taskController.delete);