import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import flash from "express-flash";
import expressSession from "express-session";
import helmet from "helmet";
import morgan from "morgan";
import passport from "passport";
import passportLocal from "passport-local";
import { RouteGateway } from "./route";
const users = [
  {
    id: "123",
    name: "req.body.name",
    email: "email@example.com",
    password: "hashedPassword",
  },
];
const app = express();
const LocalStrategy = passportLocal.Strategy;

// CONFIG MIDDLEWARE
app.use(
  cors({
    origin: "*",
  })
);
app.use(flash());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  expressSession({
    secret: "asá",
    name: "secret",
  })
);
app.use(
  compression({
    level: 6,
    threshold: 20 * 1000,
  })
);
app.use(cookieParser());
passport.use(
  new LocalStrategy({ usernameField: "email" }, () => {
    console.log("passport");
  })
);
passport.serializeUser((user, done) => done(null, "123"));
passport.deserializeUser((id, done) => {
  return done(null, "123");
});
app.use(passport.initialize());
app.use(passport.session());
// CONFIG DB

// const mongooseDBconnect = new MongooseDb();

// export const instanceMongooseDB = mongooseDBconnect.getInstance();

// CONFIG ROUTER
// PRIVATE ROUTE

// app.get("/", (req, res) => {
//   res.send("get Header");
// });
// app.post(
//   "/login",
//   passport.authenticate("local", {
//     successRedirect: "/",
//     failureRedirect: "/login",
//     failureFlash: true,
//   })
// );

app.use("/", RouteGateway);
// PUBLIC ROUTER

export default app;
