import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";

const hadleErrorMiddleware = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }
  console.log(err);

  return res.status(500).json({
    status: "error",
    message: "internal server error",
  });
};

export default hadleErrorMiddleware;
