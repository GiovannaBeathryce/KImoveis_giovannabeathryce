import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { Schedules } from "../../entities/schedules_u_p.entity";
import { User } from "../../entities/user.entity";
import { Properties } from "../../entities/properties.entitiy";
import { IScheduleRequest } from "../../interfaces/schedules";

const createScheduleServices = async ({
  userId,
  propertyId,
  date,
  hour,
}: IScheduleRequest) => {
  const userRepository = AppDataSource.getRepository(User);
  const propertyRepository = AppDataSource.getRepository(Properties);
  const schedulesRepository = AppDataSource.getRepository(Schedules);

  const userExists = await userRepository.findOneBy({
    id: userId,
  });

  if (!userExists) {
    throw new AppError(404, "User not found");
  }

  const propertyExists = await propertyRepository.findOneBy({
    id: propertyId,
  });

  if (!propertyExists) {
    throw new AppError(404, "Property not found");
  }

  const newSchedule = schedulesRepository.create({
    // date: date,
    // hour: hour,
    // user: userExists!.id,
    // properties: propertyExists!.id,
  });

  console.log(userExists);
  console.log(propertyExists);

  return newSchedule;
};

export default createScheduleServices;
