import { Request, Response } from "express";
import createPropertyServices from "../../services/properties/createProperty.services";

const createPropertyController = async (req: Request, res: Response) => {
  const {
    categoryId,
    size,
    value,
    address: { city, district, state, zipCode, number },
  } = req.body;
  const createProperty = await createPropertyServices({
    categoryId,
    size,
    value,
    address: { city, district, state, zipCode, number },
  });

  return res.status(201).json(createProperty);
};

export default createPropertyController;
