import { Router } from "express";
import createScheduleController from "../controllers/schedules/createSchedules.controller";
import listSchedulesPropertyController from "../controllers/schedules/listSchedulesProperty.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdmMiddlewares from "../middlewares/ensureIsAdm.middlewares";

const schedulesRoutes = Router();

schedulesRoutes.post("", createScheduleController);
schedulesRoutes.get(
  "schedules/properties/:id",
  ensureAuthMiddleware,
  ensureIsAdmMiddlewares,
  listSchedulesPropertyController
);

export default schedulesRoutes;
