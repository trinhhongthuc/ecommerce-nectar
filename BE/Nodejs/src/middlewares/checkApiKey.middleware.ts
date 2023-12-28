import { NextFunction, Request, Response } from "express";
import { APP } from "../constants";
import { KeyService } from "../services/key.service";

export async function checkApiKey(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const key = req.headers[APP.HEADER.API_KEY]?.toString();
    const _keyService = new KeyService();

    if (!key) {
      return res.status(403).json({
        message: "Forbidden Error",
      });
    }

    // check object keys
    const objKey = await _keyService.findByKey(key);
    if (!objKey?.metadata)
      return res.status(403).json({
        message: "Forbidden Error",
      });

    req.objKey = objKey;

    next();
  } catch (error) {
    console.error(error);
  }
}
