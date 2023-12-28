import express from "express";
import { UserController } from "../../controllers";
import { handleError } from "../../middlewares";

const userController = new UserController();
const router = express.Router();

// router.use(checkApiKey);
// router.use(checkPermissions);

router.post("/signup", handleError(userController.signup));
router.post("/login", userController.login);

export { router as AccessRouter };
