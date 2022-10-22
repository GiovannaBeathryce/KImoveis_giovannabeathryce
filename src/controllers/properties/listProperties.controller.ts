import { Request, Response } from "express";
import listPropertiesServices from "../../services/properties/listProperties.services";

const listPropertiesController = async (req: Request, res: Response) => {
  const properties = await listPropertiesServices();
  return res.json(properties);
};
export default listPropertiesController;
