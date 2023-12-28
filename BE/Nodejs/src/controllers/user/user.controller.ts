import { NextFunction, Request, Response } from "express";
import { UserService } from "../../services";
export class UserController {
  userService: UserService = new UserService();

  signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = req.body;
      res.status(201).json(await this.userService.signup(body));
    } catch (error) {
      next(error);
    }
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = req.body;

      return this.userService.login(body);
    } catch (error) {
      next(error);
    }
  };
}
