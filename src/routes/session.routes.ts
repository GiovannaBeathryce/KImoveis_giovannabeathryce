import { Router } from "express";
import siginUserController from "../controllers/session/siginUser.controller";

const sessionRoutes = Router();

sessionRoutes.post("", siginUserController);

export default sessionRoutes;
