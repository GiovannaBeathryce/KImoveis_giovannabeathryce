import { Router } from "express";
import createUserController from "../controllers/user/createUser.controller";
import deleteUserController from "../controllers/user/deleteUser.controller";
import listUsersController from "../controllers/user/listUsers.controller";
import updateUserController from "../controllers/user/updateUser.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdmMiddlewares from "../middlewares/ensureIsAdm.middlewares";

const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get(
  "",
  ensureAuthMiddleware,
  ensureIsAdmMiddlewares,
  listUsersController
);
userRoutes.patch("/:id", ensureAuthMiddleware, updateUserController);
userRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsAdmMiddlewares,
  deleteUserController
);

export default userRoutes;
