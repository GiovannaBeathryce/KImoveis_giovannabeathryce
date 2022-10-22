import AppDataSource from "../../data-source";
import { IUserRequest } from "../../interfaces/users";
import { User } from "../../entities/user.entity";
import { hash } from "bcrypt";
import { AppError } from "../../errors/appError";

const createUserServices = async ({
  name,
  email,
  password,
  isAdm,
}: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  if (!password) {
    throw new AppError(400, "Password is missing");
  }

  const hashedPassword = await hash(password, 10);

  const user = userRepository.create({
    name,
    email,
    isAdm,
    isActive: true,
    password: hashedPassword,
  });

  await userRepository.save(user);

  return user;
};
export default createUserServices;
