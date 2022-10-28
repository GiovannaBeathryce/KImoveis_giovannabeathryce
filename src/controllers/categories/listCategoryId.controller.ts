import { Request, Response } from "express";
import listCategoriesIdServices from "../../services/categories/listCategotyId.services";

const listCategoryIdController = async (req: Request, res: Response) => {
  const categoryId = req.params.id;

  const properties = await listCategoriesIdServices(categoryId);
  return res.json(properties);
};
export default listCategoryIdController;
