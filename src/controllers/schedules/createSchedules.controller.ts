import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import { IScheduleRequest } from "../../interfaces/schedules";
import createScheduleServices from "../../services/schedules/createSchedules.services";

const createScheduleController = async (req: Request, res: Response) => {
  const { date, hour, userId, propertyId } = req.body;

  let token = req.headers.authorization;

  if (!token) {
    throw new AppError(401, "Invalid token");
  }
  const createSchedule = await createScheduleServices({
    date,
    hour,
    userId,
    propertyId,
  });

  return res.status(201).json({ message: "Scheduling performed" });
};

export default createScheduleController;
