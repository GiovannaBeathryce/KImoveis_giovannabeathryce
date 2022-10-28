import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUser, IUserUpdate } from "../../interfaces/users";
import { hash } from "bcryptjs";
import { AppError } from "../../errors/appError";

const updateUserServices = async (
  updateUser: IUserUpdate,
  id: string
): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id,
  });

  if (!findUser) {
    throw new AppError(404, "User not found");
  }

  await userRepository.update(id, {
    name: updateUser.name ? updateUser.name : findUser.name,
    email: updateUser.email ? updateUser.email : findUser.email,
    password: updateUser.password
      ? await hash(updateUser.password, 10)
      : findUser.password,
  });

  const user = await userRepository.findOneBy({
    id,
  });

  // console.log(plainUser);
  const { password, ...plainPassword } = user!;
  // console.log(user);

  // console.log(plainPassword);
  return plainPassword!;
};

export default updateUserServices;
