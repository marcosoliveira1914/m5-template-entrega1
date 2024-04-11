import { prisma } from "../database/prisma"
import { Task, TaskCreate } from "../interfaces"
import { taskSchema } from "../schemas";

export class TaskService {
    create = async (payload: TaskCreate): Promise<Task> => {
        
        const newTask = await prisma.task.create({ data: payload });
        
        return taskSchema.parse(newTask);
    }

    // get = () => {}

    // getMany = () => {}

    // update = () => {}

    // delete = () => {}
}