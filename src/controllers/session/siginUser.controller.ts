import { Request, Response } from "express";
import { IUserLogin } from "../../interfaces/users";
import siginUserServices from "../../services/session/siginUser.services";

const siginUserController = async (req: Request, res: Response) => {
  const data: IUserLogin = req.body;
  const token = await siginUserServices(data);

  return res.status(200).json({ token });
};

export default siginUserController;
