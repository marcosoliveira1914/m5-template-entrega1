import { z } from "zod";
import { TaskCreateSchema, taskSchema } from "../schemas";

type Task = z.infer<typeof taskSchema>;

type TaskCreate = z.infer<typeof TaskCreateSchema>;

export { Task, TaskCreate };