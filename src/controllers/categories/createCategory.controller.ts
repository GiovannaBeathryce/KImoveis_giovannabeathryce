import { Request, Response } from "express";
import { ICategoryRequest } from "../../interfaces/categories";
import createCategoryServices from "../../services/categories/createCategory.services";

const createCategoryController = async (req: Request, res: Response) => {
  const category: ICategoryRequest = req.body;
  const createUser = await createCategoryServices(category);
  return res.status(201).json(createUser);
};
export default createCategoryController;
