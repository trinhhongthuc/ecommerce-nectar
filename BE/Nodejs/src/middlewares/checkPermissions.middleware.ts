import { NextFunction, Request, Response } from "express";

export const checkPermissions = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.objKey?.metadata?.permissions) {
      return res.status(403).json({
        message: "Permission denied",
      });
    }

    const validPermissions = req.objKey?.metadata?.permissions.includes("0000");

    if (!validPermissions)
      return res.status(403).json({
        message: "Permission denied",
      });

    return next();
  } catch (error) {
    console.error(error);
  }
};
