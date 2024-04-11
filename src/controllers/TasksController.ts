import { Request, Response } from "express";
import { TaskService } from "../services/TaskService";

export class TaskControllers {
    private service = new TaskService();
    
    public create = async (req: Request, res: Response): Promise<Response> => {

        const album = await this.service.create(req.body);
        return res.status(201).json(album);
      };

    // public get(){}

    // public getMany(){}

    // public update(){}

    // public delete(){}
}