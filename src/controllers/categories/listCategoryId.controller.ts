import { Request, Response } from "express";
import listCategoriesIdServices from "../../services/categories/listCategotyId.services";

const listCategoryIdController = async (req: Request, res: Response) => {
  const id = req.params.id;

  const categories = await listCategoriesIdServices(id);
  return res.json(categories);
};
export default listCategoryIdController;
