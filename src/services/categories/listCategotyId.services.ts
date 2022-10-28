import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { AppError } from "../../errors/appError";

const listCategoriesIdServices = async (id: string): Promise<Categories> => {
  const categoryIDRepository = AppDataSource.getRepository(Categories);

  const findCategory = await categoryIDRepository.findOne({
    where: {
      id,
    },
    relations: {
      properties: true,
    },
  });

  if (!findCategory) {
    throw new AppError(404, "Category not found");
  }

  return findCategory;
};
export default listCategoriesIdServices;
