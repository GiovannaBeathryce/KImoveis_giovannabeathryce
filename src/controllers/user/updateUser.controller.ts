import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import { IUserUpdate } from "../../interfaces/users";
import updateUserServices from "../../services/user/updateUser.services";
import { instanceToPlain } from "class-transformer";

const updateUserController = async (req: Request, res: Response) => {
  const bodyReq = req.body;
  const userReq = req.user;
  const user: IUserUpdate = req.body;
  const id = req.params.id;

  if (userReq.id !== id && userReq.isAdm === false) {
    throw new AppError(401, "User is not admin");
  } else if (
    bodyReq.hasOwnProperty("isActive") ||
    bodyReq.hasOwnProperty("id") ||
    bodyReq.hasOwnProperty("isAdm")
  ) {
    throw new AppError(
      401,
      "The id, isActive and isAdm fields cannot be changed"
    );
  }
  const updatedUser = await updateUserServices(user, id);
  return res.status(200).json(instanceToPlain(updatedUser));
};

export default updateUserController;
