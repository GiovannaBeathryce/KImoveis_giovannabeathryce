import { Request, Response } from "express";
import listSchedulesPropertyServices from "../../services/schedules/listSchedulesProperty.services";

const listSchedulesPropertyController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const schedulesList = await listSchedulesPropertyServices(id);
  return res.status(200).json(schedulesList);
};

export default listSchedulesPropertyController;
