import { Request, Response } from "express";
import { IUserRequest } from "../../interfaces/users";
import createUserServices from "../../services/user/createUser.services";
import { instanceToPlain } from "class-transformer";

const createUserController = async (req: Request, res: Response) => {
  try {
    const user: IUserRequest = req.body;
    const createUser = await createUserServices(user);
    return res.status(201).json(instanceToPlain(createUser));
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};
export default createUserController;
