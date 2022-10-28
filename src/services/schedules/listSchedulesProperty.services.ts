import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entitiy";
import { Schedules } from "../../entities/schedules_u_p.entity";
import { AppError } from "../../errors/appError";

const listSchedulesPropertyServices = async (
  propertyId: string
): Promise<any> => {
  const propertyRepository = AppDataSource.getRepository(Properties);
  const scheduleRepository = AppDataSource.getRepository(Schedules);

  const propertyExists = await propertyRepository.findOneBy({
    id: propertyId,
  });

  if (!propertyExists) {
    throw new AppError(404, "Category not found");
  }
  const schedule = await scheduleRepository.find({
    where: {
      properties: {
        id: propertyExists.id,
      },
    },
  });

  console.log(schedule);

  return schedule;
};

export default listSchedulesPropertyServices;
