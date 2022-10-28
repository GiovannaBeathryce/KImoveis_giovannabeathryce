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
}: IScheduleRequest): Promise<any> => {
  const userRepository = AppDataSource.getRepository(User);
  const propertyRepository = AppDataSource.getRepository(Properties);
  const schedulesRepository = AppDataSource.getRepository(Schedules);

  const getHour = +hour.split(" : ")[0];
  if (getHour < 8 || getHour >= 18) {
    throw new AppError(400, "Unavailable time");
  }

  const getDay = new Date(date).getDay();
  if (getDay === 6 || getDay === 0) {
    throw new AppError(400, "Enter a working day");
  }

  const scheduleExist = await schedulesRepository.find();
  const findSchedule = scheduleExist.find((scheduleExist) => scheduleExist);

  const userExists = await userRepository.findOneBy({
    id: userId,
  });

  const propertyExists = await propertyRepository.findOneBy({
    id: propertyId,
  });

  if (!userExists || !propertyExists) {
    throw new AppError(404, "User or Property not found");
  }

  if (findSchedule) {
    throw new AppError(400, "Unavailable date or time");
  }

  const newSchedule = schedulesRepository.create({
    date,
    hour,
    user: { id: userId },
    properties: { id: propertyId },
  });

  await schedulesRepository.save(newSchedule);

  return newSchedule;
};

export default createScheduleServices;
