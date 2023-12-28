import express from "express";
import { AccessRouter } from "./user";

const router = express.Router();

// router.get("/", (req, res, next) => {
//   res.send("User gateway!!!");
// });

router.use("/", AccessRouter);

export default router;
