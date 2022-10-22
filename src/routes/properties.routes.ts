import { Router } from "express";
import createPropertyController from "../controllers/properties/createProperty.controller";
import listPropertiesController from "../controllers/properties/listProperties.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdmMiddlewares from "../middlewares/ensureIsAdm.middlewares";

const propertiesRoutes = Router();

propertiesRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureIsAdmMiddlewares,
  createPropertyController
);
propertiesRoutes.get("", listPropertiesController);

export default propertiesRoutes;
