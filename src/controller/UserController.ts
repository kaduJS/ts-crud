import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { UserTable } from "../model/UserTable";

interface Body {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
}

class UserController {
  async store(req: Request, res: Response) {
    const repository = getRepository(UserTable);
    const body: Body = req.body;

    const user = repository.create({
      name: body.name,
      email: body.email,
      password: body.password,
    });
    await repository.save(user);

    return res.status(200).json(user);
  }

  async update(req: Request, res: Response) {
    const repository = getRepository(UserTable);
    const currentId: string = req.params.id;
    const body: Body = req.body;

    await repository.update(currentId, {
      name: body.name,
      email: body.email,
      password: body.password,
    });

    return res.sendStatus(204);
  }

  async index(req: Request, res: Response) {
    const repository = getRepository(UserTable);

    const userList = await repository.find();

    return res.status(200).json(userList);
  }

  async indexById(req: Request, res: Response) {
    const repository = getRepository(UserTable);
    const currentId: string = req.params.id;

    const userSelected = await repository.findOne(currentId);

    return res.status(200).json(userSelected);
  }

  async delete(req: Request, res: Response) {
    const repository = getRepository(UserTable);
    const currentId: string = req.params.id;

    await repository.delete({ id: currentId });

    return res.sendStatus(204);
  }
}

export default new UserController();
