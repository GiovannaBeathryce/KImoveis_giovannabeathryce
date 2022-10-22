import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../errors/appError";

const ensureAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    throw new AppError(401, "Invalid token");
  }

  token = token?.split(" ")[1];

  jwt.verify(
    token as string,
    process.env.SECRET_KEY as string,
    (error: any, decoded: any) => {
      if (error) {
        throw new AppError(403, "Invalid token");
      }

      req.user = {
        isAdm: decoded.isAdm,
        id: decoded.sub,
      };

      next();
    }
  );
};

export default ensureAuthMiddleware;
