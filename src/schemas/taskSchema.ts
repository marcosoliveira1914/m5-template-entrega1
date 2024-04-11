import { z } from "zod";

export const taskSchema = z.object({
    id: z.number().positive(),
    title: z.string(),
    content: z.string(),
    finished: z.boolean(),
    categoryId: z.number().positive().optional(),
    category: z.number().positive().optional(),
});

export const TaskCreateSchema = taskSchema.omit({ id: true});