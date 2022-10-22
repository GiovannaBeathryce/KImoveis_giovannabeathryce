import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { AppError } from "../../errors/appError";
import { ICategoryRequest } from "../../interfaces/categories";

const createCategoryServices = async ({
  name,
}: ICategoryRequest): Promise<ICategoryRequest> => {
  const categoryRepository = AppDataSource.getRepository(Categories);

  const exists = await categoryRepository.findOneBy({
    name,
  });

  if (exists) {
    throw new AppError(400, "Category already exists");
  }

  const category = categoryRepository.create({
    name,
  });

  await categoryRepository.save(category);

  return category;
};
export default createCategoryServices;
