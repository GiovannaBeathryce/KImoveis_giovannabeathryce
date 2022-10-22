import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { ICategoryRequest } from "../../interfaces/categories";

const listCategoriesServices = async (): Promise<ICategoryRequest[]> => {
  const categoryRepository = AppDataSource.getRepository(Categories);

  const categories = await categoryRepository.find();

  return categories;
};
export default listCategoriesServices;
