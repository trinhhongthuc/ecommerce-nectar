import { NextFunction, Request, Response } from "express";
import { UserType } from "../../types";

export interface IAccessController {
  signup(req: Request, res: Response, next: NextFunction): void;
}

export interface IAccessService {
  signup(user: UserType): void;
}

export interface IAccessEntities {
  signup(user: UserType): Promise<void>;
}
