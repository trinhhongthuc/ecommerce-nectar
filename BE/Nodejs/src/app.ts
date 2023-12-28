import compression from "compression";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import helmet from "helmet";
import HttpStatusCode from "http-status-codes";
import morgan from "morgan";
import "reflect-metadata";
import { CustomError } from "./core";
import { connectToPostgresDb } from "./database/postgre.database";
import { KeyEntities } from "./entities/key.entities";
import router from "./routes";
const app = express();

//declare
declare global {
  namespace Express {
    interface Request {
      objKey?:
        | {
            code: string;
            message: string;
            metadata: KeyEntities | null;
          }
        | undefined;
    }
  }
}

// Init
app.use(
  cors({
    origin: "*",
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));
app.use(
  compression({
    level: 6,
    threshold: 50 * 1000,
  })
);

connectToPostgresDb();

app.use("/user", router);

app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new CustomError("Not Found", HttpStatusCode.NOT_FOUND);

  next(error);
});

app.use(
  (error: CustomError, req: Request, res: Response, next: NextFunction) => {
    const status = error.status || 500;
    return res.status(status).json({
      message: error.message,
      status: error.status,
    });
  }
);

export default app;
