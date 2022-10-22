import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/addresses.entity";
import { Categories } from "../../entities/categories.entity";
import { Properties } from "../../entities/properties.entitiy";
import { AppError } from "../../errors/appError";
import { IPropertyRequest } from "../../interfaces/properties";

const createPropertyServices = async ({
  categoryId,
  size,
  value,
  address: { city, district, state, zipCode, number },
}: IPropertyRequest) => {
  const propertyRepository = AppDataSource.getRepository(Properties);
  const adressRepository = AppDataSource.getRepository(Addresses);
  const categoriesRepository = AppDataSource.getRepository(Categories);

  const existsAdress = await adressRepository.findOneBy({
    zipCode,
  });

  if (existsAdress?.number === number) {
    throw new AppError(400, "Address already registered");
  }

  if (state.length > 2) {
    throw new AppError(400, "State must have only two characters");
  }

  if (zipCode.length > 8) {
    throw new AppError(400, "ZipCode must only be eight characters long");
  }

  const newAdress = adressRepository.create({
    district,
    zipCode,
    number,
    city,
    state,
  });
  await adressRepository.save(newAdress);

  const categoryCurr = await categoriesRepository.findOneBy({
    id: categoryId,
  });

  if (!categoryCurr) {
    throw new AppError(404, "Category not found");
  }

  const properties = propertyRepository.create({
    value,
    createdAt: new Date(),
    updatedAt: new Date(),
    size,
    sold: false,
    address: newAdress,
    category: { id: categoryCurr.id, name: categoryCurr.name },
  });

  await propertyRepository.save(properties);

  return properties;
};
export default createPropertyServices;
