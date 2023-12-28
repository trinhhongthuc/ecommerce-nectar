import { NextFunction, Request, Response } from "express";
import retry from "retry";

const retryOptions = {
  retries: 3,
  factor: 2,
  minTimeout: 1000,
  maxTimeout: 10000,
  randomize: true,
};
const retryMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const operation = retry.operation(retryOptions);
  operation.attempt(() => {
    // handle request to backend service\
    console.log("retrying request");
  });
  console.log("retrying request 2");
  next();
};

export default retryMiddleware;
