import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";

export const handleError = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};
