import express from "express";
import { authProxy, paymentProxy, userProxy } from "../middleware";
const router = express.Router();

router.use("/auth", authProxy);
router.use("/user", userProxy);
router.use("/payment", paymentProxy);

export default router;
