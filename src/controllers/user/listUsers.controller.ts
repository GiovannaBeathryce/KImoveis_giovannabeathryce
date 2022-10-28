import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import listUsersServices from "../../services/user/listUsers.services";

const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersServices();
  return res.json(instanceToPlain(users));
};
export default listUsersController;
