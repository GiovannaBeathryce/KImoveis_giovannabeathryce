import { Request, Response } from "express";
import listCategoriesServices from "../../services/categories/listCategorys.services";

const listCategoriesController = async (req: Request, res: Response) => {
  const categories = await listCategoriesServices();
  return res.json(categories);
};
export default listCategoriesController;
