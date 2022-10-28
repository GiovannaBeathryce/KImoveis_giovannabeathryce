import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import { IScheduleRequest } from "../../interfaces/schedules";
import createScheduleServices from "../../services/schedules/createSchedules.services";

const createScheduleController = async (req: Request, res: Response) => {
  const { scheduleReq } = req.body;

  let token = req.headers.authorization;

  if (!token) {
    throw new AppError(401, "Invalid token");
  }
  const createSchedule = await createScheduleServices(scheduleReq);

  return res.status(201).json({ message: "Scheduling performed" });
};

export default createScheduleController;
