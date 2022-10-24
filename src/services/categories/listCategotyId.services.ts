import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { Properties } from "../../entities/properties.entitiy";
import { AppError } from "../../errors/appError";
import { ICategoryRequest } from "../../interfaces/categories";

const listCategoriesIdServices = async (id: string): Promise<Properties[]> => {
  const propertyRepository = AppDataSource.getRepository(Properties);
  const categoryIDRepository = AppDataSource.getRepository(Categories);

  const findCategory = await categoryIDRepository.findOneBy({
    id,
  });

  if (!findCategory) {
    throw new AppError(404, "Category not found");
  }

  const listProperties = await propertyRepository.find({
    where: {
      category: findCategory!,
    },
  });
  return listProperties;
};
export default listCategoriesIdServices;
