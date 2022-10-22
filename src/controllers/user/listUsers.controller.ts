import { Request, Response } from "express";
import listUsersServices from "../../services/user/listUsers.services";

const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersServices();
  return res.json(users);
};
export default listUsersController;
