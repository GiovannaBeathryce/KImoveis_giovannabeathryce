import { Request, Response } from "express";
import { IUserUpdate } from "../../interfaces/users";
import deleteUserServices from "../../services/user/deleteUser.services";

const deleteUserController = async (req: Request, res: Response) => {
  const user: IUserUpdate = req.body;
  const id = req.params.id;
  const updatedUser = await deleteUserServices(user, id);
  return res.status(204).json(updatedUser);
};

export default deleteUserController;
