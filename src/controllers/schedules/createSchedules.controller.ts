import { Request, Response } from "express";
import createScheduleServices from "../../services/schedules/createSchedules.services";

const createScheduleController = async (req: Request, res: Response) => {
  const { date, hour, propertyId, userId } = req.body;

  const createSchedule = await createScheduleServices({
    date,
    hour,
    propertyId,
    userId,
  });
  return res.status(201).json(createSchedule);
};

export default createScheduleController;
