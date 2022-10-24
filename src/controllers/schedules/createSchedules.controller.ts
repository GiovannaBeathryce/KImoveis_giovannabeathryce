import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import createScheduleServices from "../../services/schedules/createSchedules.services";

const createScheduleController = async (req: Request, res: Response) => {
  const { date, hour, propertyId, userId } = req.body;

  let token = req.headers.authorization;

  if (!token) {
    throw new AppError(401, "Invalid token");
  }
  const createSchedule = await createScheduleServices({
    date,
    hour,
    propertyId,
    userId,
  });
  return res.status(201).json(createSchedule);
};

export default createScheduleController;
