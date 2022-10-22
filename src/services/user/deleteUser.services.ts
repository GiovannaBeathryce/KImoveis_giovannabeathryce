import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const deleteUserServices = async (u: object, id: string): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id,
  });

  if (!findUser) {
    throw new AppError(404, "User not found");
  }

  if (findUser.isActive === false) {
    throw new AppError(400, "User not found");
  }

  await userRepository.update(id, {
    isActive: false,
  });

  const user = await userRepository.findOneBy({
    id,
  });

  return user!;
};

export default deleteUserServices;
