import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entitiy";
import { Schedules } from "../../entities/schedules_u_p.entity";
import { AppError } from "../../errors/appError";

const listSchedulesPropertyServices = async (id: string) => {
  const propertyRepository = AppDataSource.getMongoRepository(Properties);
  const scheduleRepository = AppDataSource.getRepository(Schedules);

  const findProperty = await propertyRepository.findOneBy({
    id,
  });

  const listSchedules = await scheduleRepository.findOneBy({
    // properties:findProperty?.id
  });
};

export default listSchedulesPropertyServices;
