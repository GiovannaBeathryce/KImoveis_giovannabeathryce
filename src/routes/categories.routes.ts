import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategory.controller";
import listCategoriesController from "../controllers/categories/listCategories.controller";
import listCategoryIdController from "../controllers/categories/listCategoryId.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdmMiddlewares from "../middlewares/ensureIsAdm.middlewares";

const categoryroute = Router();

categoryroute.post(
  "",
  ensureAuthMiddleware,
  ensureIsAdmMiddlewares,
  createCategoryController
);
categoryroute.get("", listCategoriesController);
categoryroute.get(
  "/:id/properties",
  listCategoryIdController,
  listCategoryIdController
);

export default categoryroute;
